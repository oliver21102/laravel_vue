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
    return view('dashboard');
});

/*w le decimos que utilice todos los reccursos posibles para esta ista  excepto show*/
Route::resource('tasks','TaskController',['except'=>'show','create','edit']);  