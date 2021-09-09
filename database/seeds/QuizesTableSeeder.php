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
         DB::table('quizzes')->insert(
            [
            'question' => 'この動画で使われた、”えらい”を言い換えると次のうちどれですか',
            'answear' => 1,
            'choice1' => 'かなり、ものすごく',
            'choice2' => '少しだけ',
            'choice3' => 'ありありと',
            'display_id' => 2,
            ]);
    }
}
