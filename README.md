# :egg: HelloWorld.java in curl

This project is an Easter-egg with the `curl` command in collaboration with [@NanowarOfSteel](https://github.com/NanowarOfSteel).  
The principle is simple, when you access the Easter-egg, you just have to start the music [HelloWorld.java](https://www.youtube.com/watch?v=yup8gIXxWDU) when the timer has elapsed, and admire the result.
You can also check the web version [on the Nanowar's website](https://nanowar.it/helloworld).

## :computer: Usage

To access to this Easter-egg, open the command prompt and run the following command:

```bash
curl -L nanowar.it/helloworld
```

> ![Warning]
> The `-L` is used to follow redirects so it's important to keep it.  

You can also customize the delay before starting the easter-egg:

```bash
curl -L nanowar.it/helloworld?delay=<int> # Delay in seconds (5 by default)
```

## :information_source: About

This Easter-egg was created by [**S2009**](https://s2009.fr/).  
It is actually in v1.0.0 and [liscenced](../../?tab=GPL-3.0-1-ov-file) under [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html).
