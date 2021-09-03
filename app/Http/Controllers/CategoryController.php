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
    public function index($id = -1)
    {
         if ($id == -1)
        { 
            return Category::with(['display'])->get()->toJson();
          
        } 
        else {
            return Category::with(['display'])->find($id)->toJson();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function news(Display $display, Category $category, $id = 1)
    {
        $category = Category::with('display')->find($id);
        $displays = $category->Display;
        $categorizing = Category::find($id);
        return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function comedy(Display $display, Category $category, $id = 2)
    {
     $category = Category::with('display')->find($id);
     $displays = $category->Display;
     $categorizing = Category::find($id);
     return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function sing(Display $display, Category $category, $id = 3)
    {
         $category = Category::with('display')->find($id);
         $displays = $category->Display;
         $categorizing = Category::find($id);
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function basic(Display $display, Category $category, $id = 4)
    {
         $category = Category::with('display')->find($id);
         $displays = $category->Display;
         $categorizing = Category::find($id);
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function culture(Display $display, Category $category, $id = 5)
    {
         $category = Category::with('display')->find($id);
         $displays = $category->Display;
         $categorizing = Category::find($id);
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
    
    public function expression(Display $display, Category $category, $id = 6)
    {
        $category = Category::with('display')->find($id);
         $displays = $category->Display;
         $categorizing = Category::find($id);
         return view('category', ['displays' => $displays, 'categorizing' => $categorizing]);
    }
}
