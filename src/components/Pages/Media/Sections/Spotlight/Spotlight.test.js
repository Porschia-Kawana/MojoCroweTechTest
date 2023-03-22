
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Spotlight from "./Spotlight";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null
});

const mockData = [{
    createdAt: "2022-08-09T03:46:31.727Z",
    description: "Be interested not interesting, focus on the human being not the human doing: meet mindset coach of the moment, Ben Crowe. He’s helped Ash Barty, Dylan Alcott and the Richmond Tigers rediscover their mojo. But now an exhausted Ben Crowe – whose trademark is encouraging high-flyers to accept their imperfections – is in need of a reset of his own.",
    featured: false,
    id: "uHKOg6JwU6vDy30b",
    publishedAt: "2022-06-25T02:00:00.000Z",
    source: "The Good Weekend",
    thumbnailUri: "https://assets.mojocrowe.com/media/GoodWeekend.png",
    title: "Mind Games",
    type: "article",
    updatedAt: "2022-08-09T03:46:31.727Z",
    url: "https://www.smh.com.au/national/the-june-25-edition-20220617-p5aul6.html"
}, {
    createdAt: "2022-08-09T03:46:32.501Z",
    description: "Ben Crowe, Barty's performance coach and mentor, told 3AW Mornings the tennis ace was driven by a number of things.",
    featured: true,
    id: "8TuMW6NNCO7kYPAh",
    publishedAt: "2021-07-12T02:00:00.000Z",
    source: "OMNY",
    thumbnailUri: "https://assets.mojocrowe.com/media/3AW_2.png",
    title: "What motivates Ash Barty and drives her tennis - Mornings with Neil Mitchell - Omny.fm",
    type: "podcast",
    updatedAt: "2022-08-15T02:01:39.570Z",
    url: "https://omny.fm/shows/mornings-with-neil-mitchell/what-motivates-ash-barty-and-makes-her-tick"
}, {
    createdAt: "2022-08-09T03:46:31.754Z",
    description: "It was never about the tennis. It was also never about other people and what they wanted. It was never about titles or rankings. It was about who Ash Barty was, and what she wanted. That’s all. Understanding this helps you understand how Ash Barty became the best tennis player in the world in the first instance. Understanding it also helps inform how she could do something so unexpected, so extraordinary and so brave as to walk away from tennis when at the top of her game. It had never been about other people. Barty never sought to satisfy the expectations of others, to slake the Australian thirst for a new champion. That was all ancillary to it being about who Ash Barty was, and what she could do something so unexpected, so extraordinary and so brave as to walk away from tennis when at the top of her game.",
    featured: true,
    id: "kn7D0D7gQfgMg57J",
    publishedAt: "2022-04-01T01:00:00.000Z",
    source: "The Sydney Morning Herald",
    thumbnailUri: "https://assets.mojocrowe.com/media/SMH - Mentor Behind the Athlete.png",
    title: "It was never about the tennis: Barty’s mentor on the person behind the player",
    type: "article",
    updatedAt: "2022-08-22T01:29:03.547Z",
    url: "https://www.smh.com.au/sport/tennis/it-was-never-about-the-tennis-barty-s-mentor-on-the-person-behind-the-player-20220401-p5a9z2.html"
}, {
    createdAt: "2022-08-15T02:00:22.122Z",
    description: "One of the reasons the public loves tennis goddess Ash Barty is because of her authenticity - the way she's defining her career by her own rules, not by the expectations of others. One of the people who has helped her reach that place of mental and emotional security is mindset coach Ben Crowe.",
    featured: false,
    id: "EcwqOCvo5VrzWIgr",
    publishedAt: "2022-06-29T02:00:00.000Z",
    source: "ABC",
    thumbnailUri: "https://assets.mojocrowe.com/media/730 Report.png",
    title: "Meet Ash Barty's mindset coach Ben Crowe – redefining goals and expectations",
    type: "video",
    updatedAt: "2022-08-15T02:00:22.122Z",
    url: "https://www.abc.net.au/7.30/meet-ash-bartys-mindset-coach-ben-crowe-%E2%80%93/13952192"
}]

it("renders Spotlight Section with data from query", () => {
    act(() => {
        render(<Spotlight data={mockData} />, container);
    });

    expect(container.textContent).toContain("Spotlight");


    // Expects non-featured articles to be removed
    expect(container.textContent).not.toContain(mockData[0].title);
    expect(container.textContent).not.toContain(mockData[0].description);

    // Expects Podcast Appear
    expect(container.textContent).toContain(mockData[1].title);

    // Expects Featured Articles to Appear
    expect(container.textContent).toContain(mockData[2].title);
    expect(container.textContent).toContain(mockData[2].description);

    // Expects Videos Appear
    expect(container.textContent).toContain(mockData[3].title);
});
