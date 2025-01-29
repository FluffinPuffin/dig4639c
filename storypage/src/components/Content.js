import React from 'react';

const Content = () => {
    const Content = 'Long ago, there was a race held by the Jade Emperor. The race was to determine the order of the Chinese Zodiac. The first twelve animals to cross the river would be the winners and have a year named after them.';

    const Content2 = 'The first one was the rat. The rat had asked ox to help him cross the river. At the end, the rat jumped off, securing first place, followed by ox. Tiger crossed 3rd. Rabbit hopped across and ended up being 4th due to dragon\'s help. Dragon then came in 5th as he had shown great kindness in helping a village. Horse came in 7th, as snake was curled around his leg and stole 6th.';

    const Content3 = 'Ram, monkey, and rooster had taken a raft across the river. They decided that ram would be 8th, monkey 9th, and rooster 10th. Dog came in 11th as he had taken a bath in ther river. Finally, pig came in 12th as he had stopped to eat and sleep.';

    return (
        <main>
            <p>
                {Content};
            </p>
            <p>
                {Content2};
            </p>
            <p>
                {Content3};
            </p>
        </main>
    );
};

export default Content;