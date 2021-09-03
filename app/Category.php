<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function display(){
        return $this->hasMany('App\Display', 'category_id');
    }
}
