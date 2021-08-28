<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Display;
use App\Category;
use Illuminate\Http\Request;

class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function index() 
    {
        return view('index');
    }
    
     public function json($id = -1){
        // if ($id == -1)
        // { 
        //  $display = new Display;
        //  $display = $display->get();
        //  return response()->json(['data' => $display]);
        // } 
        // else {
        //   $display = new Display;
        //   $display = $display::find($id);
        //  return response()->json(['data' => $display]);
        // }
          if ($id == -1)
        { 
            return Display::get()->toJson();
        } 
        else {
            return Display::find($id)->toJson();
        }
    }
    
    public function categories($id = -1){
        if ($id == -1)
        { 
            return Category::get()->toJson();
        } 
        else {
            return Category::find($id)->toJson();
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
   
     public function outcome(Request $request)
     {
        $quize = $request->quizzes_outcome;
        return view('outcome', ['quize' => $quize]);
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
    public function show($id, Request $request)
    {
        // dd($request);
        $display = Display::find($id);
        return view('show', ['display' => $display]);
      
    }
    
    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Display  $display
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $display = Display::find($id);
        
        return view('quize', ['display' => $display]);
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
