//SANITY


// 1 Create question/bit of text
// 2 Question > 2 possible responses
// 3 Each response > GOTO 1


//outcome should be
{
'starting_q': 'q1'
'q1': {'question': 'apples or oranges', 'answers': [{id: 'q2', 'text':'apples'}, {id: 'q3', 'text':'oranges'}]},
'q2': {'question': 'granny smith or fuji', 'answers': [{id: 'q3', 'text': 'granny smith'}]
  }
}

// FRONT-END
// 1 get starting question
// 2 display answers
// 3 answer selected > corresponds to question id > get question
// GOTO 1
