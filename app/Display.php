<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Display extends Model
{
    public function category(){
        return $this->belongsTo('App\Category');
    }
    
    public function quizzes() {
        return $this->hasMany('App\Quiz');
    }
    
    //  public function trans() {
    //     return $this->hasMany('App\Transcription');
    // }
}