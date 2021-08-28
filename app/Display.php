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
    
    public function getByLimit(int $limit_count = 3)
{
    // updated_atで降順に並べたあと、limitで件数制限をかける
    return $this->limit($limit_count)->get();
}
}
