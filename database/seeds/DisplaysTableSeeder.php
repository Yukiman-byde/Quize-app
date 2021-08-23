<?php

use Illuminate\Database\Seeder;

class DisplaysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('displays')->insert(
            [
            'name' => 'News 19/08/2021',
            'description' => 'コロナ感染者数',
            'video' => 'https://www.youtube.com/embed/iUs6jSJ0up8?start=0&end=28',
            'thumbnail' => 'https://i.ytimg.com/vi/iUs6jSJ0up8/mqdefault.jpg',
            'quize_id' => '1',
            'category_id' => '1',
            ]);
    }
}
