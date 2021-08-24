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
Route::get('/displays/json', 'DisplayController@json');
Route::get('/displays/json/{id}', 'DisplayController@json');

Route::get('/categories/json', 'DisplayController@categories');
Route::get('/categories/json/{id}', 'DisplayController@categories');

Route::get('/', function () {
   return redirect('/display');
});


Route::get('/display', 'DisplayController@index')->name('display.index');
Route::get('/outcome', 'DisplayController@outcome')->name('display.outcome');
Route::get('/{id}', 'DisplayController@show')->name('display.show');
Route::get('/{id}/quize', 'DisplayController@edit')->name('display.quize');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
