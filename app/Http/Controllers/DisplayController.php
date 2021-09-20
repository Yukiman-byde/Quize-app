<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use Storage;
use App\Display;
use App\Category;
use App\Category\sub_name;
use App\Quiz;
use App\Transcription;
use Illuminate\Http\Request;

class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   //displayのデータをJsonへ
    public function json($id = -1){
          if ($id == -1)
        { 
           //リレーション済みで関係性も完璧出来だからこれを送る
           //$display = $display->find($id)->categories()->get();
          // $category = $category->find($id)->displays()->get();
            return Display::get()->toJson();
        } 
        else {
            return Display::all()->find($id)->toJson();
        }
    }
    //categoryのデータをJsonへ
    public function category($id = -1){
         if ($id == -1)
         { 
             return Category::get()->toJson();
         } 
         else {
             return Category::find($id)->toJson();
         }
    }
    //特定のカテゴリーを送る
    public function categories(Category $category,$sub_name){
        $cate = new Category;
        $catego = $cate->where('sub_name', 'LIKE', "%$sub_name%");
       
        return $catego->get()->toJson();
    }
    //displayとくっついてるQuizを送る。
    public function quize($id = -1){
         if ($id == -1)
        { 
            return Display::get()->toJson();
        } 
        else {
            $display = Display::find($id);
            $display = $display->quizzes;
            return $display->toJson();
        }
    }
    //displayにくっついてるdiscriptionを送る。
    public function trans($id = -1){
          if ($id == -1)
        { 
             return Transcription::get()->toJson();
        } 
        else {
             return Transcription::find($id)->toJson();
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
     //一覧ページを表示
         public function index(Category $category,Display $display, $id=2) 
        {
           //$display = $display->find($id)->categories()->get();
            $category = $category->find($id)->displays()->get();
            // dd($display);
            return view('index');
        }
   //問題の回答をOutcomeページに送る。
     public function outcome($id, Request $request, Quiz $quiz)
    {
         $choices = $request->except(['token']);
      
         $dejas = [];
        foreach($choices as $question => $choice) {
           $answer = Quiz::where('question', $question)->value('answear');
           $deja = array('question' => $question, 'selected' => $choice, 'answer'=> $answer);
           array_push($dejas, $deja);
        }
         $category = New Category;
         $info = $category->find($id);
         
         $category = $category->find($id);
         $categories = $category->displays;
    
         return view('outcome', ['categories' => $categories, 'dejas' => $dejas, 'info' => $info]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Display  $display
     * @return \Illuminate\Http\Response
     */
     //showページを出す。
    public function show()
    {
        return view('show');
    }
    
     //quizページを出す
    public function edit($id)
    {
        //$display = Display::find($id);
        
        return view('quize');
    }
    
        public function user()
       {
           $user = Auth::user();
           return $user->toJson();
       }
    
       public function userEdit(Request $request)
       {
         
             $user = new User;
          //   $form = $request->all();
             //s3アップロード開始
             $image = $request->file('image');
             dd($image);
      // バケットの`quizees-app`フォルダへアップロード
            $path = Storage::disk('s3')->putFile('quizees-app', $image, 'public');
      // アップロードした画像のフルパスを取得
            $user->picture = Storage::disk('s3')->url($path);

            $user->save();

           return redirect('/display');
       }
   
    
   public function search(Category $category,Display $display, $name){
       //渡されてきたnameはdisplayの中も配列なので同様に,配列にしてから処理したほうがいい。
       $name = 
          [
           'name' => $name,
          ];
        $description = 
            [
             'description' => $name
            ];
      $msg = '該当するビデオはありませんでした。';
     $display = $display->all();
     
 
      if(!empty($name))
          {
            $displays = Display::where('name', 'like', $name['name'])
                                 ->orWhere('description', 'like', $name['name'])->get();
            //$displays = $display->where(function($query){
               //$query->where('name', 'like', $name['name'])->orWhere('description', 'like', $description['description']);
            //});
          }

   
         return view('search', ['displays' => $displays, 'msg' => $msg]);
     //$display = $display->where('name', 'LIKE', "%$name%");
   }
}
