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
            'name' => '千鳥(tidori)',
            'description' => 'ノブ！元気を出そう！',
            'video' => 'https://www.youtube.com/embed/s7aCgy_zXrk',
            'thumbnail' => 'https://i.ytimg.com/vi/s7aCgy_zXrk/mqdefault.jpg',
            'quize_id' => '5',
            'category_id' => '2',
            ]);
    }
}
