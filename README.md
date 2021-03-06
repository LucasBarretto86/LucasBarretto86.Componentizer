# LucasBarretto86 Componentizer

Basically is react like component to create HTML Elements and handle states

## Install

### npm

~~~ bash
npm -i lucasbarretto86.componentizer --save
~~~

### yarn

~~~ bash
yarn add -D lucasbarretto86.componentizer
~~~

## Usage

Basic you create some new class and extend the `Componentizer` class

~~~ js
import Componentizer from 'componentizer'

    default export class Example extends Componentizer {
        render(){
            return this.build("h1", "", {class: "message"}, 
                ["span", "Hello", {class: "message__clear"}],
                ["span", "World", {class: "message__dark"}]
            )
        }     
    }
~~~

## Implementation

Everytime you extend `Componentizer` you need to implement a specific render() method to setup your component.

## Changelog

~~~ md
1.0.1 - Update project
1.0.2 - General adjustments
1.0.3 - Make main componentizer class call render implementations by default
1.0.4 - Create condition to add data attributes on elements and make component creation syntax better
1.0.5 - Fix `this._dataset` paramenter reference to add data attributes
~~~
