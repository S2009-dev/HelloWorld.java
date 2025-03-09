const lyrics = [
    {
        text: `<span style="color: magenta">package </span>it.nanowar.ofsteel.helloworld;`,
        start: 29190,
        end: 33920
    },
    {
        text: ` `,
        start: 34000,
        end: 34001
    },
    {
        text: `<span style="color: magenta">public class </span>HelloWorldMainLauncherClass {`,
        start: 38650,
        end: 43260
    },
    {
        text: ` `,
        start: 44000,
        end: 44001
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: magenta">public </span>HelloWorldMainLauncherClass(<span style="color: magenta">int </span>foo) {`,
        start: 48340,
        end: 52500
    },
    {
        text: ` `,
        start: 52600,
        end: 52601
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: magenta">super</span>();`,
        start: 52960,
        end: 53760
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: magenta">this</span>.<span style="color: magenta">foo</span>=foo;`,
        start: 53880,
        end: 55730
    },
    {
        text: `&#160;&#160;&#160;&#160;}`,
        start: 55840,
        end: 57460
    },
    {
        text: ` `,
        start: 57500,
        end: 57501
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: magenta">private </span>Integer <span style="color: gray">foo</span>=0;`,
        start: 58030,
        end: 62420
    },
    {
        text: ` `,
        start: 62500,
        end: 62501
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: magenta">public void </span>songRefrain() {`,
        start: 62760,
        end: 66570
    },
    {
        text: ` `,
        start: 66600,
        end: 66601
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: magenta">for </span>(<span style="color: magenta">int</span> <span style="color: gray">i</span>=0; i&lt;foo; i++) {`,
        start: 67030,
        end: 70840
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;System.<span style="color: magenta">out</span>.println(<span style="color: cyan">"Hello World!"</span>);`,
        start: 70960,
        end: 74420
    },
    {
        text: ` `,
        start: 74500,
        end: 74501
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;}`,
        start: 74650,
        end: 75460
    },
    {
        text: ` `,
        start: 75500,
        end: 75501
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: magenta">int</span> <span style="color: gray">pippo</span>=0;`,
        start: 76610,
        end: 78460
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: magenta">while </span>(pippo&lt;foo) {`,
        start: 78570,
        end: 80190
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;System.<span style="color: magenta">out</span>.println(<span style="color: cyan">"Hello World!"</span>);`,
        start: 80300,
        end: 83760
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;pippo++;`,
        start: 84000,
        end: 84920
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;}`,
        start: 85030,
        end: 85500
    },
    {
        text: `&#160;&#160;&#160;&#160;}`,
        start: 85610,
        end: 86190
    },
    {
        text: ` `,
        start: 90000,
        end: 90001
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: magenta">public static void </span>main (String <span style="color: gray">[] args</span>) {`,
        start: 95070,
        end: 99800
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;System.<span style="color: magenta">out</span>.println(<span style="color: cyan">"Hello World Programmer Start"</span>);`,
        start: 104420,
        end: 109260
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;HelloWorldMainLauncherClass <span style="color: gray">tizio </span>= <span style="color: magenta">new </span>HelloWorldMainLauncherClass(2);`,
        start: 114460,
        end: 122650
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;tizio.songRefrain();`,
        start: 123920,
        end: 127960
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;System.<span style="color: magenta">out</span>.println(<span style="color: cyan">"Program Finished!"</span>);`,
        start: 128190,
        end: 131070
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;tizio.falseMethod();`,
        start: 131190,
        end: 131760
    },
    {
        text: `&#160;&#160;&#160;&#160;}`,
        start: 131880,
        end: 132570
    },
    {
        text: ` `,
        start: 140000,
        end: 140001
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: lime">/*`,
        start: 150000,
        end: 150002
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: lime">* If I may introduce a bug, the JVM will manage it for me`,
        start: 151840,
        end: 159000
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: lime">* ensuring both security and portability`,
        start: 159230,
        end: 167300
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: lime">* Then I'll write my code once, and run it everywhere!`,
        start: 167530,
        end: 175380
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: lime">* With Static and Strong Typing, will let my programs be type safe!`,
        start: 175610,
        end: 184610
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: lime">*/`,
        start: 185000,
        end: 185002
    },
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: magenta">public void </span>falseMethod() {`,
        start: 206880,
        end: 210460
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: magenta">boolean</span> <span style="color: gray">metal</span>=<span style="color: magenta">false</span>;`,
        start: 211840,
        end: 215530
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: magenta">if</span>(metal==<span style="color: magenta">false</span>) {`,
        start: 215760,
        end: 219690
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;String <span style="color: gray">joeyDeCaio</span>=<span style="color: magenta">null</span>;`,
        start: 224530,
        end: 228920
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;joeyDeCaio.length();`,
        start: 230760,
        end: 233070
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;}`,
        start: 233100,
        end: 233200
    },
    {
        text: `&#160;&#160;&#160;&#160;}`,
        start: 233300,
        end: 233400
    },
    {
        text: `}`,
        start: 233500,
        end: 233600
    }
]

const null_error = [
    {
        text: `&#160;&#160;&#160;&#160;<span style="color: white; background-color: red">Exception in thread "main" java.lang.NullPointerException</span>`,
        start: 233760,
        end: 234760
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: red">at HelloWorldMainLauncherClass.falseMethod(HelloWorldMainLauncherClass.java:46)</span>`,
        start: 234760,
        end: 235760
    },
    {
        text: `&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;<span style="color: red">at HelloWorldMainLauncherClass.main(HelloWorldMainLauncherClass.java:32)</span>`,
        start: 235760,
        end: 236000
    }
]

function write(id, text) {
    const textarea = document.getElementById('textarea');
    const child = document.createElement('code');

    textarea.appendChild(child);
    textarea.scrollTop = textarea.scrollHeight;
    child.setAttribute('id', `${id}`);
    child.innerHTML = text;
}

function writeLine(number, prefix, line){
    const totalTime = line.end - line.start;
    const startTime = Date.now();
    const initialIntervalTime = Math.floor(totalTime / line.text.length);

    let index = 0;
    let chars = '';

    function writeChar() {
        if (index < line.text.length) {
            const elem = document.getElementById(`${number}`);
            let char = line.text[index];
            let nextChar = line.text[index + 1];

            if (char === '<' && (nextChar === 's' || nextChar === '/')) {
                const endIndex = line.text.indexOf(">", index) + 1;
                const char = line.text.substring(index, endIndex);

                index = endIndex;
                chars += char;
                elem.innerHTML = `${prefix}${chars}`;
                writeChar();
            } else if (char === '&' && (nextChar === '#' || nextChar === 'l')) {
                const endIndex = line.text.indexOf(";", index) + 1;
                const char = line.text.substring(index, endIndex);

                index = endIndex;
                chars += char;
                elem.innerHTML = `${prefix}${chars}`;
                writeChar();
            } else {
                index++;
                chars += char;
                elem.innerHTML = `${prefix}${chars}`;
                const remainingChars = line.text.length - index;
                const elapsedTime = Date.now() - startTime;
                const remainingTime = totalTime - elapsedTime;

                if(remainingChars != 0){
                    const intervalTime = Math.floor(remainingTime / remainingChars);
                    setTimeout(writeChar, intervalTime);
                } else {
                    writeChar();
                }
            }
        }
    }

    write(number, `${prefix}${line.text[0]}`);
    setTimeout(writeChar, initialIntervalTime);
}

function end() {
    write('void', '')
    writeLine('error0', '', null_error[0]);

    setTimeout(() => {
        writeLine('error1', '', null_error[1]);
    }, 1000);

    setTimeout(() => {
        writeLine('error2', '', null_error[2]);
    }, 2000);

    setTimeout(() => {
        window.location.href = '/about';
    }, 5000);
}

function start(){
    let line_to_check = 0;
    let elapsedTime = 0;
    let delay = lyrics[line_to_check].start - elapsedTime;

    write('intro', `<span style="color: gray">[INTRO]</span>\n`);

    function showLyrics() {
        let num;

        if (line_to_check + 1 < 10) {
            num = `&#160;${line_to_check + 1}`;
        } else {
            num = line_to_check + 1;
        }

        writeLine(line_to_check, `<span style="color: gray">${num}&#160;&#160;&#160;&#160;</span>`, lyrics[line_to_check]);
        line_to_check++;

        if(line_to_check >= lyrics.length) return end();

        elapsedTime += delay;
        delay = lyrics[line_to_check].start - elapsedTime;
        if (delay > 0) {
           setTimeout(showLyrics, delay);
        }
    }

    setTimeout(showLyrics, delay);
}

function showMain() {
    const main = document.getElementById('main');
    const popup = document.getElementById('popup');
    const cooldown = document.getElementById('cooldown');
    const url = new URL(window.location.href);
    const delay = Math.floor(url.searchParams.get('delay')) || 5;
    let remainingSeconds = delay;

    cooldown.innerText = delay;
    main.style.display = 'flex';
    setTimeout(() => {
        main.style.opacity = 1;

        const interval = setInterval(() => {
            remainingSeconds--;
            cooldown.innerText = remainingSeconds;
            if (remainingSeconds <= 0) {
                popup.style.opacity = '0';

                clearInterval(interval);
                setTimeout(() => {
                    popup.style.display = 'none';
                    start();
                }, 1100);
            }
        }, 1000);
    }, 500);
}