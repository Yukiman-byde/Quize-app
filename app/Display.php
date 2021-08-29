<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Display extends Model
{
    public function category(){
        return $this->belongsTo('App\Category', 'category_id');
    }
    
    public function quize() {
        return $this->belongsTo('App\Quize', 'quize_id');
    }
}
