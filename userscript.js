// ==UserScript==
// @name         practiscore.com Division Counter (CCP, ESP, CDP, CO, SSP, PCC)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Counts the occurrences of CCP, ESP, CDP, CO, SSP and PCC on the squadding page and displays the result in a floating window
// @author       Sylardo
// @match        https://practiscore.com/*/squadding
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function countTags() {
        // Select all <span> elements
        const spans = document.querySelectorAll('span');

        // Initialize data storage
        const counters = {
            CCP: { count: 0, names: [] },
            ESP: { count: 0, names: [] },
            CDP: { count: 0, names: [] },
            CO: { count: 0, names: [] },
            SSP: { count: 0, names: [] },
            PCC: { count: 0, names: [] },
        };

        // Loop through spans and check title attributes
        spans.forEach(span => {
            const title = span.getAttribute('title');
            if (title) {
                Object.keys(counters).forEach(key => {
                    if (title.includes(`(${key}`)) {
                        counters[key].count++;
                        const name = title.split(' (')[0]; // Extract name before "("
                        counters[key].names.push(name);
                    }
                });
            }
        });

        // Log results in the console
        console.log('Tag counts:', counters);

        // Display results in a floating box
        showResults(counters);
    }

    function showResults(counters) {
        // Remove existing result box if it exists
        document.getElementById('tagCounterBox')?.remove();

        // Create floating box
        const box = document.createElement('div');
        box.id = 'tagCounterBox';
        box.style.position = 'fixed';
        box.style.bottom = '20px';
        box.style.right = '20px';
        box.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        box.style.color = 'white';
        box.style.padding = '15px';
        box.style.borderRadius = '10px';
        box.style.fontSize = '14px';
        box.style.zIndex = '10000';
        box.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
        box.style.maxWidth = '200px';
        box.style.textAlign = 'center';

        // Add close button
        const closeButton = document.createElement('button');
        closeButton.innerText = '×';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '10px';
        closeButton.style.border = 'none';
        closeButton.style.background = 'transparent';
        closeButton.style.color = 'white';
        closeButton.style.fontSize = '16px';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = () => box.remove();
        box.appendChild(closeButton);

        // Add title
        const title = document.createElement('h3');
        title.innerText = 'Division counter';
        title.style.margin = '0 0 10px 0';
        title.style.fontSize = '16px';
        title.style.textDecoration = 'underline';
        box.appendChild(title);

        // Add results with click events
        Object.entries(counters).forEach(([key, value]) => {
            const line = document.createElement('p');
            line.innerText = `${key}: ${value.count}`;
            line.style.margin = '5px 0';
            line.style.fontWeight = 'bold';
            line.style.cursor = 'pointer';
            line.style.textDecoration = 'underline';
            line.onclick = () => showNames(key, value.names);
            box.appendChild(line);
        });

        // Append box to body
        document.body.appendChild(box);
    }

    function showNames(tag, names) {
        // Remove existing names box if it exists
        document.getElementById('nameListBox')?.remove();

        // Create floating box for names
        const nameBox = document.createElement('div');
        nameBox.id = 'nameListBox';
        nameBox.style.position = 'fixed';
        nameBox.style.bottom = (20 + document.getElementById('tagCounterBox').offsetHeight) + 'px';
        nameBox.style.right = '20px';
        nameBox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        nameBox.style.color = 'white';
        nameBox.style.padding = '15px';
        nameBox.style.borderRadius = '10px';
        nameBox.style.fontSize = '14px';
        nameBox.style.zIndex = '10001'; // Ensures it appears above the counter box
        nameBox.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
        nameBox.style.maxWidth = '250px';
        nameBox.style.textAlign = 'left';
        nameBox.style.overflowY = 'auto';
        nameBox.style.maxHeight = '300px';

        // Add close button
        const closeButton = document.createElement('button');
        closeButton.innerText = '×';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '10px';
        closeButton.style.border = 'none';
        closeButton.style.background = 'transparent';
        closeButton.style.color = 'white';
        closeButton.style.fontSize = '16px';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = () => nameBox.remove();
        nameBox.appendChild(closeButton);

        // Add title
        const title = document.createElement('h3');
        title.innerText = `Shooters in ${tag}`;
        title.style.margin = '0 0 10px 0';
        title.style.fontSize = '16px';
        title.style.textDecoration = 'underline';
        nameBox.appendChild(title);

        // Add names list
        names.forEach(name => {
            const nameLine = document.createElement('p');
            nameLine.innerText = name;
            nameLine.style.margin = '5px 0';
            nameLine.style.paddingLeft = '10px';
            //nameLine.style.borderLeft = '2px solid white';
            nameBox.appendChild(nameLine);
        });

        // Append names box to body
        document.body.appendChild(nameBox);
    }

    // Run the script after the page loads
    setTimeout(countTags, 2000);
})();
