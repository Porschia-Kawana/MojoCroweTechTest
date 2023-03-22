
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { format } from 'date-fns';
import { act } from "react-dom/test-utils";

import Article from "./Article";

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
}]

it("renders Articles Section with data from query", () => {
    act(() => {
        render(<Article data={mockData} />, container);
    });

    expect(container.textContent).toContain("Articles");

    // Checks that correct data is displaying
    expect(
        container.querySelector(`[data-testid='${mockData[0].id}']`).getAttribute("href")
    ).toEqual(mockData[0].url);

    expect(container.textContent).toContain(mockData[0].title);
    expect(container.textContent).toContain(mockData[0].description);
    expect(container.textContent).toContain(format(Date.parse(mockData[0].publishedAt), 'dd MMMM yyyy'));
    expect(container.textContent).toContain(mockData[0].source);

    expect(
        container.querySelector("img").getAttribute("alt")
    ).toContain(`${mockData[0].title} - Article Image`);

    // Checks that media of other forms aren't being display i.e. podcast and videos
    expect(
        container.querySelector(`[data-testid='${mockData[1].id}']`)
    ).not.toBeInTheDocument;

    expect(container.textContent).not.toContain(mockData[1].title);
    expect(container.textContent).not.toContain(mockData[1].description);
});
