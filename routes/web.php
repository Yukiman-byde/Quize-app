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

Route::get('/', function () {
   return redirect('/displays');
});

Route::get('/display/outcome', 'DisplayController@outcome')->name('display.outcome');
Route::get('/displays', 'DisplayController@index')->name('display.index');
Route::get('/display/{id}', 'DisplayController@show')->name('display.show');
Route::get('/display/{id}/quize', 'DisplayController@edit')->name('display.quize');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
