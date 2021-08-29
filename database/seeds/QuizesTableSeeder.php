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
            'id' => 1,
            'question' => '過去何番目の多さでしたか',
            'answear' => 2,
            'choice1' => '四番目',
            'choice2' => '二番目',
            'choice3' => '三番目',
            ]);
    }
}
