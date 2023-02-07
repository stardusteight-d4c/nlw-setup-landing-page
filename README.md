# NLW Setup | Intersection Observer API

![banner](banner.png)

> Development of a web landing page, this project was developed following the layout of the Landing Page of the Rocketseat NlW Setup Event, and
> aims to create an attractive and functional web interface for the presentation of a product or service. For this, the following were used:
> tools and/or utilities: `Sticky`: to fix elements on the screen during scrolling, such as a navigation menu or a call to action. `Accordion`: 
> to show and hide information in a list in an interactive and organized way. `Parallax`: to create a 3D visual effect with layers of elements 
> that move with different speeds when scrolling the page. `Marquee`: to create a continuous scrolling animation of text or image. `IntersectionObserver`:
> to control the display of elements on the page according to their position on the screen. `Layout animations`: to create smooth and fluid animations 
> for the presentation of elements on the page. In addition, usability, accessibility and responsiveness were considered to ensure a good user experience 
> on different devices and screen sizes. The landing page will be designed with a clean and modern layout, highlighting key information and calls
> to action for the visitor.

:arrow_right: Intersection Observer API <br /> 
:arrow_right: Effects and Layout Elements <br /> 

<br />

## Intersection Observer API 

The Intersection Observer API `is a tool for monitoring whether elements on a page are in or out of the user's view`. This can be useful for loading dynamic elements on the page, such as images, only when they are visible, saving resources and improving site speed. Furthermore, it can be used to implement animations based on the position of the element on the page.

The Intersection Observer API provides a way to `asynchronously watch for changes at the intersection of a target element with an ancestor element or with the viewport of a top-level document`.

Historically, detecting an element's visibility, or the relative visibility of two elements in relation to one another, has been a difficult task for which solutions are unreliable and prone to slowing down the browser and the sites the user is viewing. access. As the web has matured, the need for this type of information has increased. Intersection information is needed for several reasons, such as:

 - Lazy-loading of images or other content while a page is scrolled.
 - Infinite Scrolling, where more and more content is loaded and rendered as you scroll, so the user doesn't have to flip through the pages.
 - Ad viewability reports to calculate advertising revenue.
 - Decide whether or not to run animation tasks or processes based on whether or not the user will see the result.
 
Implementing intersection detection in the past involved event handlers and methods calling loops like `Element.getBoundingClientRect()` to create the necessary information for each affected element. `Since all this code runs on the main thread, even one of them can cause performance issues`. When a site is loaded with these tests, things can get ugly.

Consider a web page that uses infinite scrolling. `It uses a vendor-supplied library` to manage the ads placed periodically across the page, it has animated graphics here and there, and it uses a custom library that draws notification boxes and the like. Each of them has its own intersection detection routines, all of which run on the main thread. `The website author may not even realize this is happening, as he may know very little about the inner workings of the two libraries he is using`. `As the user scrolls down the page, these intersection detection routines fire constantly during the scroll handling code, resulting in an experience that leaves the user frustrated with the browser, the website and the computer`.

The Intersection Observer `API allows code to register a callback function that runs whenever an element they want to monitor enters or leaves another element (or the viewport) or when the value by which the two meet cross changes into a requested value`. `This way, sites no longer need to do anything in the main thread to observe this type of intersection of elements, and the browser is free to optimize the management of intersections as it sees fit`.

One thing the Intersection Observer API can't tell you: the exact number of pixels that overlap or specifically what they are; however, it does cover the much more common use case of "If they intersect somewhere around N%, I need to do something."

The following function is an implementation of a `React effect hook`, using the `IntersectionObserver API`. The useEffect function is used to `monitor the presence of an HTML Element` on the user's screen, so that an action can be taken. The `IntersectionObserver object is used to determine whether or not the element is being displayed on the screen`.

`The observe function is used to start monitoring the div`, passing the div element as a parameter. The return of the useEffect function is a cleanup function that is called when the component is unmounted, and that disconnects the observer to avoid errors.

`The setIsVisible function is used to update the application state with the element's visibility`. The reference to the element is kept in the application state with `educatorsRef`.

```tsx
// src/components/Educators.tsx

// ref is in view?
// several times
useEffect(() => {
  if (educatorsRef !== null) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      })
    })
    observer.observe(educatorsRef.current!)
    return () => observer.disconnect()
  }
}, [educatorsRef])
```

This code creates an instance of `IntersectionObserver`, which is a browser API that lets you observe the intersection status of an element relative to a specified `viewport or scrollable area`.

`The function passed as an argument to the constructor of the IntersectionObserver is called whenever there is a change in the intersection status of the element`. In this case, it iterates over the given inputs `(each input represents an observed element)` and, if the `"isIntersecting"` property of an input is true, it means that the element is visible on the screen, and the state `"setIsVisible "` is set to true. Otherwise, the state is set to false.

The observe() function of the IntersectionObserver object is used to start observing the element referenced by "educatorsRef.current".

Finally, the callback function (invoked when the component is unmounted) is used to disconnect the watch.

After obtaining the information of whether the element is visible on the user's screen or not, we can manipulate the CSS classes that added the animations to that element, `removing and adding animation classes with the initial and final state`:


```tsx
// src/components/Educators.tsx

	// ...

	useEffect(() => {
		window.addEventListener('scroll', handleEducatorsItemsAnimate)
		return () => {
		  window.removeEventListener('scroll', handleEducatorsItemsAnimate)
		}
	}, [scrollY])

	const handleEducatorsItemsAnimate = () => {
		setScrollY(window.scrollY)
		if (isVisible) {
		  setTimeout(() => {
		    setAnimateTitle(true)
		  }, 400)
		  setTimeout(() => {
		    setAnimateEducators(true)
		  }, 100)
		} else {
		  setAnimateTitle(false)
		  setAnimateEducators(false)
		}
	}

  return (
    <section id="educators" ref={educatorsRef} className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.headerWrapper}>
          <h2 className={style.handleHeading(animateTitle)}>
            Aprenda com educadores com décadas de experiência
          </h2>
          <Button>garantir ingresso gratuito</Button>
        </div>
        <div className={style.handleEducatorsContainer(animateEducators)}>
          {educatorsProps.map((educator, index) => (
            <EducatorCard key={`${index}-${educator.name}`} {...educator} />
          ))}
        </div>
      </div>
    </section>
  )
}

const style = {
  wrapper: `educatorsBackground py-[80px] md:py-[140px] max-w-screen h-fit`,
  contentWrapper: `max-w-7xl mx-auto px-4 lg:px-14`,
  headerWrapper: `flex flex-col md:flex-row items-center justify-between mb-[80px]`,
  handleHeading: (animate: boolean) => {
    return `${
      animate
        ? 'animate-educators-title-final-state-from-left'
        : 'animate-educators-title-initial-state-from-left '
    } text-[#E1E1E6] mb-6 md:mb-0 text-center md:text-left md:w-[500px] font-bold text-[24px] md:text-[32px] !leading-[140%]`
  },
  handleEducatorsContainer: (animate: boolean) => {
    return `${
      animate
        ? 'animate-educators-person-final-state-from-top'
        : 'animate-educators-person-initial-state-from-top'
    } grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16`
  },
}
```
*<i>developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API</i> <br />

<br />

## Effects and Layout Elements

 - Marquee

Marquee is an animation technique that consists of making elements move from one side to the other on the screen. `It's a good choice for drawing attention to important messages or highlighting elements on the page`. In HTML, it is possible to implement a Marquee using CSS styles.

 - Sticky

Sticky is a feature that allows you to stick elements on the page, `so that they are visible even when the user scrolls the page`. This is useful for navigation bars, headers, and other elements that must be visible no matter where the user is on the page. In React, it is possible to implement Sticky using CSS styles and DOM manipulation.

 - Accordion

Accordion is a feature that allows you to show and hide content in an animated way. `It's a good option for presenting information in an organized and clear way, saving space on the page`. In React, it is possible to implement an Accordion using components and state management.

 - Parallax

Parallax is an animation technique that `consists of creating a sense of depth on the page, making elements have different movements when the user scrolls the page`. It's a good choice for creating interactive and engaging pages. In React, it is possible to implement a Parallax using CSS styles and DOM manipulation.

In summary, CSS and JS offer a number of advanced features that allow you to create interactive and engaging pages. Combining CSS styling, DOM manipulation with CSS and JS makes it possible to create cool animations in fully native ways.
