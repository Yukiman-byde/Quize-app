<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
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
            return Display::get()->toJson();
        } 
        else {
            return Display::find($id)->toJson();
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
         public function index() 
        {
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
    
   public function search(Category $category,Display $display, $name){
       //渡されてきたnameはdisplayの中も配列なので同様に,配列にしてから処理したほうがいい。
       $name = 
          [
           'name' => $name,
          ];
      $msg = '該当するビデオはありませんでした。';
     $display = $display->all();
 
      if(!empty($name))
          {
            $displays = $display->where('name','like',$name['name']);
          }
         $category = $category->find($displays);
   
         return view('search', ['displays' => $displays, 'msg' => $msg]);
     //$display = $display->where('name', 'LIKE', "%$name%");
   }
}
