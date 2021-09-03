<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//JSONファイル(一覧ページから)
Route::get('/displays/json', 'DisplayController@json');
Route::get('/displays/json/{id}', 'DisplayController@json');
Route::get('/categories/json', 'DisplayController@categories');
Route::get('/categories/json/{id}', 'DisplayController@categories');
Route::get('question/displays/json/{id}', 'DisplayController@json');
Route::get('question/quize/json/{id}', 'DisplayController@quize');
Route::get('transcription/json/{id}', 'DisplayController@trans');

//JSON(カテゴリーページ)
Route::get('/categories/taggin/{category}', 'CategoryController@index');

//authenticationのためのルーティング
Auth::routes();

Route::get('display/home', 'HomeController@index')->name('home');

Route::get('/', function () {
  return redirect('display/home');
});

//ページのルーティング
 Route::get('/display', 'DisplayController@index');
 Route::get('/outcome', 'DisplayController@outcome')->middleware('auth');
 Route::get('/display/{id}', 'DisplayController@show')->middleware('auth');
 Route::get('/question/display/{id}', 'DisplayController@edit')->middleware('auth');
 
 //カテゴリーからのページのルーティング
 Route::get('/category/News', 'CategoryController@news');
 Route::get('/category/comedy', 'CategoryController@comedy');
 Route::get('/category/sing', 'CategoryController@sing');
 Route::get('/category/basic', 'CategoryController@basic'); 
 Route::get('/category/culture', 'CategoryController@culture');
 Route::get('/category/expression', 'CategoryController@expression');

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');




// Route::get('/home', 'HomeController@index')->name('home');