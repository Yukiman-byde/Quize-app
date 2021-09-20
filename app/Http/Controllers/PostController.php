<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Mail\PostSent;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CreatePost;
use Illuminate\Support\Facades\Mail;
use App\Mail\SampleNotification;


class PostController extends Controller
{
    public function post(){
        return view('sents');
    }
    
    public function index(Request $request)
    {
        
        $data = $request->content;
        $to = 'fungashaka@gmail.com';
  
	   Mail::to($to)->send(new PostSent($data));        
      
        
        return view('sents');
      
    }

    public function create(CreatePost $request)
    {
        // Postモデルのインスタンスを作成する
        $post = new Post();

        // タイトル
        $post->title = $request->title;

        //画像アップロード
        $time = date("Ymdhis");

        //コンテンツ
        $post->content = $request->content;

        //登録ユーザーからidを取得
        $post->user_id = Auth::user()->id;

        // インスタンスの状態をデータベースに書き込む
        $post->save();

        // 追加
        $user = Auth::user();
        Mail::to($user)->send(new PostSent($user, $post));

        //「投稿する」をクリックしたら投稿情報表示ページへリダイレクト        
        return redirect()->route('posts.detail', [
            'id' => $post->id,
        ]);
    }

    /**
     * 詳細ページ
     */
    // public function detail(Post $post)
    // {
    //     return view('posts/detail', [
    //         'title' => $post->title,
    //         'content' => $post->content,
    //         'user_id' => $post->user_id,
    //         'image_url' => str_replace('public/', 'storage/', $post->image_url),
    //     ]);        
    // }

}
