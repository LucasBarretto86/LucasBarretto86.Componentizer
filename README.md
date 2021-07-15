# Mohamed28 Componentizer

Basically is react like component to create HTML Elements and handle states

## Install
```
npm -i mohamed28.componentizer --save
```

## Usage
Basic you create some new class and extend the `Componentizer` class

```
import Componentizer from 'componentizer'

    default export class Example extends Componentizer {

        render(){
            return this.build("h1", "", {class: "message"}, 
                ["span", "Hello", {class: "message__clear"}],
                ["span", "World", {class: "message__dark"}]
            )
        }     
    }
```

## Implementation
Everytime you extend `Componentizer` you need to implement a specific render() method, that has to be used on the main js that you will use you component