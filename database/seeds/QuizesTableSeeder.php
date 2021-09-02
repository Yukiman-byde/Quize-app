<?php

use Illuminate\Database\Seeder;

class QuizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('quizes')->insert(
            [
            'display_id' => 1,
            'question' => '全国で感染者数はどれくらいでしたか？',
            'answer' => 2,
            'choice1' => '二万六千人',
            'choice2' => '二万五千人',
            'choice3' => '一万八千人'
            ]);
    }
}
