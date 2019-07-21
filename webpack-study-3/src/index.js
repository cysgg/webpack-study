import _ from 'loadsh';
import './style/index.css';

function createDomElemente(){
    let dom = document.createElement('div')
    dom.innerHTML = _.join(['aicoder.com','好！','线下实习'],'');
    dom.classList.add('box')
    return dom;
}

let divDom = createDomElemente();

document.body.appendChild(divDom)