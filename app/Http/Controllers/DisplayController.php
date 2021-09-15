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
    
    public function json($id = -1){
          if ($id == -1)
        { 
            return Display::get()->toJson();
        } 
        else {
            return Display::find($id)->toJson();
        }
    }
    
    public function category($id = -1){
         if ($id == -1)
         { 
             return Category::get()->toJson();
         } 
         else {
             return Category::find($id)->toJson();
         }
    }
    
    public function categories(Category $category,$sub_name){
        // if ($id == -1)
        // { 
        //     return Category::get()->toJson();
        // } 
        // else {
        //     return Category::find($id)->toJson();
        // }
        //$categoryy = Category::where('name', 'LIKE', "%$category%");
        $cate = new Category;
        $catego = $cate->where('sub_name', 'LIKE', "%$sub_name%");
       
        return $catego->get()->toJson();
    }
    
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
         public function index() 
        {
            return view('index');
        }
   
     public function outcome($id, Request $request, Quiz $quiz)
    {
        //  $display = Display::find($id);
        //  $quizzes = $display->quizzes;
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
    public function show()
    {
        return view('show');
    }
    
    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Display  $display
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //$display = Display::find($id);
        
        return view('quize');
    }
    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Display  $display
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Display $display)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Display  $display
     * @return \Illuminate\Http\Response
     */
    public function destroy(Display $display)
    {
        //
    }
}
