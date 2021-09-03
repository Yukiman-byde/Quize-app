<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Display extends Model
{
    public function category(){
        return $this->belongTo('App\Category', 'category_id');
    }
    
    public function quize() {
        return $this->hasMany('App\Quize');
    }
    
     public function trans() {
        return $this->hasMany('App\Transcription');
    }
}