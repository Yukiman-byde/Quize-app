<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Display;
use App\Category;
use App\Quize;
use App\Transcription;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Category $category)
    {
        dd($category->displays);
            return $Category->find($category)->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function news(Display $display, Category $category, $id = 1)
    {
         $category = $category->find($id);
         $categorizing = $category;
         $displays = $category->displays;
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
        
    }
    
    public function comedy(Display $display, Category $category, $id = 2)
    {
      $category = $category->find($id);
      $categorizing = $category;
      $displays = $category->displays;
     return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function sing(Display $display, Category $category, $id = 3)
    {
         $category = $category->find($id);
         $categorizing = $category;
         $displays = $category->displays;
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function basic(Display $display, Category $category, $id = 4)
    {
          $category = $category->find($id);
         $categorizing = $category;
         $displays = $category->displays;
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function culture(Display $display, Category $category, $id = 5)
    {
          $category = $category->find($id);
         $categorizing = $category;
         $displays = $category->displays;
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function expression(Display $display, Category $category, $id = 6)
    {
         $category = $category->find($id);
         $categorizing = $category;
         $displays = $category->displays;
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
}
