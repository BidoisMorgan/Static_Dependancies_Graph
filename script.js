var jsonFakeData = {
    "nodes": [
        {
            "id": "nodeA",
            "name": "node 0",
            "type": "place"
            },
        {
            "id": "nodeB",
            "name": "node 1",
            "type": "place"
            },
        {
            "id": "2",
            "name": "node 2",
            "type": "program"
             },
        {
            "id": "3",
            "name": "node 3",
            "type": "device"
             },
        {
            "id": "4",
            "name": "node 4",
            "type": "service"
             },
        {
            "id": "No5",
            "name": "node 5",
            "type": "time"
             },
        {
            "id": "No6",
            "name": "node 6",
            "type": "device"
             },
        {
            "id": "No7",
            "name": "node AAAAA",
            "type": "program"
             },
        {
            "id": "BBB",
            "name": "node BBBBB",
            "type": "program"
             },
        {
            "id": "CCC",
            "name": "node CCCCC",
            "type": "device"
             },
        {
            "id": "A1",
            "name": "node alone",
            "type": "device"
             },
        {
            "id": "A2",
            "name": "node alone",
            "type": "device"
             }

        ],
    "links": [
        {
            "source": "nodeA",
            "target": "nodeB",
            "type": "licensing"
            },
        {
            "source": "nodeB",
            "target": "2",
            "type": "resolved"
             },
        {
            "source": "2",
            "target": "nodeA",
            "type": "licensing"
             },
        {
            "source": "3",
            "target": "2",
            "type": "suit"
             },
        {
            "source": "3",
            "target": "4",
            "type": "suit"
             },
        {
            "source": "nodeB",
            "target": "No5",
            "type": "licensing"
             },
        {
            "source": "No5",
            "target": "No6",
            "type": "resolved"
             },
        {
            "source": "No5",
            "target": "No6",
            "type": "licensing"
             },
        {
            "source": "nodeA",
            "target": "No7",
            "type": "licensing"
             },
        {
            "source": "nodeA",
            "target": "BBB",
            "type": "suit"
             },
        {
            "source": "CCC",
            "target": "nodeA",
            "type": "resolved"
             },
        {
            "source": "A1",
            "target": "A2",
            "type": "resolved"
             },
        {
            "source": "BBB",
            "target": "CCC",
            "type": "resolved"
             }
       ]
};

var jsonTrueData = {
    "nodes": [
        {
            "id": "program-7358",
            "name": "wait",
            "type": "program"
    },
        {
            "id": "program-796",
            "name": "testboucle",
            "type": "program"
   },
        {
            "id": "program-7783",
            "name": "test",
            "type": "program"
   },
        {
            "id": "program-7285",
            "name": "meteo",
            "type": "program"
   },
        {
            "id": "program-2084",
            "name": "select",
            "type": "program"
   },
        {
            "id": "ENO185bb4f",
            "name": "",
            "type": "device"
   },
        {
            "id": "ENO874d3f",
            "name": "Prise ventilateur",
            "type": "device"
   },
        {
            "id": "ENO258786",
            "name": "Interrupteur magique test max",
            "type": "device"
   },
        {
            "id": "00:17:88:0a:99:c1-2",
            "name": "Yellow Lamp",
            "type": "device"
   },
        {
            "id": "ENO87c5be",
            "name": "Chauffage",
            "type": "device"
   },
        {
            "id": "21106637055",
            "name": "horloge",
            "type": "device"
   },
        {
            "id": "ENO18166f0",
            "name": "Capteur de température gommette bleue",
            "type": "device"
   },
        {
            "id": "ENO2840bb",
            "name": "Bedroom card",
            "type": "device"
   },
        {
            "id": "ENO8b0dc2",
            "name": "Door contact sensor",
            "type": "device"
   },
        {
            "id": "ENO1037672",
            "name": "Capteur de lum n°2",
            "type": "device"
   },
        {
            "id": "WeatherObserver-Saint Francois Longchamp",
            "name": "Longchamp",
            "type": "device"
   },
        {
            "id": "WeatherObserver-Grenoble",
            "name": "Paris",
            "type": "device"
   },
        {
            "id": "ENO258ed1",
            "name": "",
            "type": "device"
   },
        {
            "id": "00:17:88:0a:99:c1-1",
            "name": "Blue Lamp",
            "type": "device"
   },
        {
            "id": "-172034215",
            "name": "Pouet",
            "type": "device"
   },
        {
            "id": "388583654",
            "name": "Laundry room",
            "type": "place"
   },
        {
            "id": "1242907104",
            "name": "Bathroom",
            "type": "place"
   },
        {
            "id": "-1305294610",
            "name": "Bedroom",
            "type": "place"
   },
        {
            "id": "-960769637",
            "name": "Office",
            "type": "place"
   },
        {
            "id": "99443214",
            "name": "Entrance hall",
            "type": "place"
   },
        {
            "id": "-1768292669",
            "name": "Unknow",
            "type": "device"
        }
 ],
    "links": [
        {
            "source": "program-7358",
            "target": "program-2084",
            "type": "reference"
   },
        {
            "source": "program-796",
            "target": "WeatherObserver-Saint Francois Longchamp",
            "type": "reference"
   },
        {
            "source": "program-796",
            "target": "program-7783",
            "type": "reference"
   },
        {
            "source": "program-796",
            "target": "program-2084",
            "type": "reference"
   },
        {
            "source": "program-7783",
            "target": "ENO258786",
            "type": "reference"
   },
        {
            "source": "program-7783",
            "target": "-1768292669",
            "type": "reference"
   },
        {
            "source": "program-7285",
            "target": "-172034215",
            "type": "reference"
   },
        {
            "source": "program-7285",
            "target": "WeatherObserver-Grenoble",
            "type": "reference"
   },
        {
            "source": "program-7285",
            "target": "program-7783",
            "type": "reference"
   },
        {
            "source": "program-7285",
            "target": "program-2084",
            "type": "reference"
   },
        {
            "source": "program-2084",
            "target": "ENO258786",
            "type": "reference"
   },
        {
            "source": "program-2084",
            "target": "-1768292669",
            "type": "reference"
   }
 ]
};

//var jsonData = jsonFakeData;
var jsonData = jsonTrueData;

/* Set the diagrams Height & Width */
var height = 500,
    width = 960;

var nodesArray = jsonData.nodes,
    linksFromJSON = jsonData.links;

var linksArray = [];
// Make the link array manually with the id
linksFromJSON.forEach(function (e) {
    var sourceNode = nodesArray.filter(function (n) {
            return n.id === e.source;
        })[0],
        targetNode = nodesArray.filter(function (n) {
            return n.id === e.target;
        })[0];

    linksArray.push({
        source: sourceNode,
        target: targetNode,
        type: e.type
    });
});

var linkedByIndex = {};

//sort links by source, then target
linksArray.sort(function (a, b) {
    if (a.source.id > b.source.id) {
        return 1;
    } else if (a.source.id < b.source.id) {
        return -1;
    } else {
        if (a.target.id > b.target.id) {
            return 1;
        }
        if (a.target.id < b.target.id) {
            return -1;
        } else {
            return 0;
        }
    }
});
//any links with duplicate source and target get an incremented 'linknum'
for (var i = 0; i < linksArray.length; i++) {
    if (i != 0 &&
        linksArray[i].source == linksArray[i - 1].source &&
        linksArray[i].target == linksArray[i - 1].target) {
        linksArray[i].linknum = linksArray[i - 1].linknum + 1;
    } else {
        linksArray[i].linknum = 1;
    };
};

var nodeRoot = nodesArray[0];

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// Build the directional arrows for the links/edges
// Per-type markers, as they don't inherit styles.
svg.append("svg:defs").selectAll("marker")
    .data(["suit", "licensing", "resolved", "targeting", "reference"])
    .enter().append("svg:marker")
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");

var force = d3.layout.force()
    .size([width, height])
    .nodes(nodesArray)
    .links(linksArray)
    .gravity(0.03)
    .on("tick", tick);


var path = svg.append("svg:g").selectAll("path")
    .data(force.links())
    .enter().append("svg:path")
    .attr("class", function (d) {
        return "link " + d.type;
    })
    .attr("marker-end", function (d) {
        return "url(#" + d.type + ")";
    });


//var node = svg.selectAll("node")
//    .data(nodesArray)
//    .enter().append("svg")
//    .attr("class", "node")
//    //    .attr("width", 25)
//    //    .attr("height", 25)
//    .call(force.drag)
//    .on("click", click)
//    .on("mouseover", function (d) {
//        path.style('stroke-width', function (l) {
//            if (d === l.source || d === l.target)
//                return 2;
//            else
//                return 1.25;
//        });
//        node.classed("nodeOver", function (d2) {
//            return d === d2;
//        });
//        node.classed("neighborNodeOver", function (d2) {
//            return neighboring(d, d2);
//        });
//        texts.classed("nodeOver", function (d2) {
//            return d === d2;
//        });
//        texts.classed("neighborNodeOver", function (d2) {
//            return neighboring(d, d2);
//        });
//
//        d3.select(this)
//            .style("fill", "yellow");
//    })
//    .on("mouseout", function (d) {
//        path.style('stroke-width', 1.25);
//        node.classed("nodeOver", false);
//        node.classed("neighborNodeOver", false);
//        texts.classed("nodeOver", false);
//        texts.classed("neighborNodeOver", false);
//    });
//
//var pathGroup = node.append("g")
//    .attr("id", "groupOfPaths")
//pathGroup.append("path")
//    .attr("d", "M25, 60 C100, 0 25, -10 25, 15 C25, -10 -50, 0 25, 60 Z")
//    .attr("stroke", "blue")
//    .attr("stroke-width", 2)
//    .attr("fill", "none");
//pathGroup.append("path")
//    .attr("d", "M55, 60 C100, 0 15, -10 25, 45 C25, -10 -50, 0 100, 60 Z")
//    .attr("stroke", "blue")
//    .attr("stroke-width", 2)
//    .attr("fill", "none");
//
//var combinedD = "",
//    combinedD2 = "";
//
//pathGroup.selectAll("path").each(function () {
//    combinedD += d3.select(this).attr("d");
//});
//pathGroup.remove();
//
//var pathGroup2 = node.append("g")
//    .attr("id", "groupOfPaths2")
//pathGroup2.append("path")
//    .attr("d", "M25, 60 C100, 0 25, -10 25, 15 C15, -10 -50, 0 25, -12 Z")
//    .attr("stroke", "blue")
//    .attr("stroke-width", 2)
//    .attr("fill", "none");
//pathGroup2.append("path")
//    .attr("d", "M55, 60 C100, 0 15, -10 25, 45 C25, -10 -50, 0 100, 60 Z")
//    .attr("stroke", "blue")
//    .attr("stroke-width", 2)
//    .attr("fill", "none");
//pathGroup2.selectAll("path").each(function () {
//    combinedD2 += d3.select(this).attr("d");
//});
//pathGroup2.remove();
//
//
//var drawSVG = node.append("path")
//    //    .attr("d", combinedD)
//    //    .attr("stroke", "red")
//    .attr("d", function (d) {
//        if (d.type === "device") {
//            return combinedD2;
//        } else {
//            return combinedD;
//        }
//    })
//    .attr("stroke-width", 2)
//    .attr("fill", "none")
//    .on("mouseover", function (d) {
//        path.style('stroke-width', function (l) {
//            if (d === l.source || d === l.target)
//                return 2;
//            else
//                return 1.25;
//        });
//        drawSVG.classed("nodeOver", function (d2) {
//            return d === d2;
//        });
//        node.classed("neighborNodeOver", function (d2) {
//            return neighboring(d, d2);
//        });
//        texts.classed("nodeOver", function (d2) {
//            return d === d2;
//        });
//        texts.classed("neighborNodeOver", function (d2) {
//            return neighboring(d, d2);
//        });
//
//    });


/*********/
//var node = svg.selectAll("node")
//    .data(nodesArray)
//    .enter().append("svg:path")
//    .attr("class", "node")
//        .attr("d", d3.svg.symbol().type(function (d) {
//         return getSymbolType(d.type);
//     }).size(function (d) {
//             if (d === nodeRoot) {
//                 return 248;
//             } else {
//                 return 124;
//             }
//        }))
//    //    .attr("d", "M0,-5L10,0L0,5")
//    //    .attr("d", "M5,-2L10,0L2,5")
////            .enter().append("svg:image")
////        .attr("xlink:href", "device1.svg")
////        .attr('x', -9)
////        .attr('y', -12)
////        .attr('width', 20)
////        .attr('height', 24)
//    .call(force.drag)
//    .on("click", click)
//    .on("mouseover", function (d) {
//        path.style('stroke-width', function (l) {
//            if (d === l.source || d === l.target)
//                return 2;
//            else
//                return 1.25;
//        });
//                node.attr("d", d3.svg.symbol()
//                    .type(function (d) {
//                        return getSymbolType(d.type);
//                    })
//                    .size(function (d2) {
//        //                if (d === d2) {
//        //                    return 200;
//        //                } else {
//                            return 124;
//        //                }
//                    }));
//        node.classed("nodeOver", function (d2) {
//            return d === d2;
//        });
//        node.classed("neighborNodeOver", function (d2) {
//            return neighboring(d, d2);
//        });
//        texts.classed("nodeOver", function (d2) {
//            return d === d2;
//        });
//        texts.classed("neighborNodeOver", function (d2) {
//            return neighboring(d, d2);
//        });
//
//        //        d3.select(this)
//        //            .style("fill", "yellow");
//    })
//    .on("mouseout", function (d) {
//        path.style('stroke-width', 1.25);
//        node.classed("nodeOver", false);
//        node.classed("neighborNodeOver", false);
//        texts.classed("nodeOver", false);
//        texts.classed("neighborNodeOver", false);
//    });
/*********/

/** IMAGE **/
var node = svg.selectAll("node")
    .data(nodesArray)
    .attr("class", "node")
    .enter().append("svg:g")
var cir = node.append("circle").attr("cx", function (m) {
        return 0
    })
    .attr("cy", function (m) {
        return 0
    })
    .attr("r", 14)
var img = node.append("image")
    .attr("xlink:href", function (d) {
        var imgNode = "";
        if (d.type === "device") {
            imgNode = "device.svg";
        } else if (d.type === "time") {
            imgNode === "";
        } else if (d.type === "place") {
            imgNode = "place.svg";
        } else if (d.type === "program") {
            imgNode = "program.svg";
        } else if (d.type === "service") {
            imgNode = "service.svg";
        }
        return imgNode;
    })
    .attr('x', -12)
    .attr('y', -12)
    .attr('width', 24)
    .attr('height', 24)
    .call(force.drag)
    .on("dblclick", click)
    .on("mouseover", function (d) {
        path.style('stroke-width', function (l) {
            if (d === l.source || d === l.target)
                return 2;
            else
                return 1.25;
        });
        node.classed("nodeOver", function (d2) {
            return d === d2;
        });
        node.classed("neighborNodeOver", function (d2) {
            return neighboring(d, d2);
        });
        texts.classed("nodeOver", function (d2) {
            return d === d2;
        });
        texts.classed("neighborNodeOver", function (d2) {
            return neighboring(d, d2);
        });
    })
    .on("mouseout", function (d) {
        path.style('stroke-width', 1.25);
        node.classed("nodeOver", false);
        node.classed("neighborNodeOver", false);
        texts.classed("nodeOver", false);
        texts.classed("neighborNodeOver", false);
    });
/****/


var texts = svg.selectAll("text")
    .data(nodesArray)
    .enter()
    .append("text")
    .attr("class","label")
    .attr("fill", "black")
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .text(function (d) {
        return d.name;
    })
    .classed("nodeRoot", function (d) {
        return d === nodeRoot;
    })
    .on("click", click)
    .on("mouseover", function (d) {
        node.classed("nodeOver", function (d2) {
            return d === d2;
        });
        node.classed("neighborNodeOver", function (d2) {
            return neighboring(d, d2);
        });
        path.style('stroke-width', function (l) {
            if (d === l.source || d === l.target)
                return 2;
            else
                return 1.25;
        });
        texts.classed("nodeOver", function (d2) {
            return d === d2;
        });
        texts.classed("neighborNodeOver", function (d2) {
            return neighboring(d, d2);
        });
    })
    .on("mouseout", function (d) {
        path.style('stroke-width', 1.25);
        node.classed("nodeOver", false);
        node.classed("neighborNodeOver", false);
        texts.classed("nodeOver", false);
        texts.classed("neighborNodeOver", false);
    });


refreshNeighborMap(linksArray);

var mapNeighborDeepth = [];
mapNeighborDeepth = makeDeepthNeighborsMapBreadthFirst(nodeRoot);

console.log(mapNeighborDeepth);

force
    .linkDistance(function (d) {
        var distanceSource = customLinkDistanceDeepth(d.source, mapNeighborDeepth);
        var distanceTarget = customLinkDistanceDeepth(d.target, mapNeighborDeepth);
        console.log(Math.max(distanceSource, distanceTarget));
        return Math.max(distanceSource, distanceTarget);
    })
    .charge(function (d) {
        if (d === nodeRoot) {
            return -300;
        } else {
            return -100;
        }

        //        if (d === nodeRoot) {
        //            return -300;
        //        } else {
        //            var distanceSource = customLinkDistanceDeepth2(d, mapNeighborDeepth);
        //            var distanceTarget = customLinkDistanceDeepth2(d, mapNeighborDeepth);
        //            console.log(Math.max(distanceSource, distanceTarget));
        //            return Math.max(distanceSource, distanceTarget);
        //        }
    });

nodeRoot.fixed = true;
nodeRoot.x = width / 2;
nodeRoot.y = height / 2;

force.start();

///////////////////////////////////

function tick(e) {

    //        drawSVG
    //            .attr("transform", function (d) {
    //                return "translate(" + (d.x) + "," + (d.y) + ")";
    //            });

    node
        .attr("transform", function (d) {
            return "translate(" + (d.x) + "," + (d.y) + ")";
        })
        .style("opacity", function (d) {
            if (neighboring(d, nodeRoot) || d === nodeRoot)
                return 1;
            else
                return 0.25;
        })
        .attr("d", d3.svg.symbol().type(function (d) {
            return getSymbolType(d.type);
        }).size(function (d) {
            if (d === nodeRoot) {
                return 248;
            } else {
                return 124;
            }
        }));

    //    nodeSVG
    //        .attr("transform", function (d) {
    //            return "translate(" + (d.x) + "," + (d.y) + ")";
    //        })

    path
        .attr("d", function (d) {
            var dx = d.target.x - d.source.x,
                dy = d.target.y - d.source.y,
                dr = 150 / d.linknum; //linknum is defined above
            return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
        })
        .style("opacity", function (d) {
            if (d.source === nodeRoot || d.target === nodeRoot) {
                return 1;
            } else {
                return 0.25;
            }
        })
        .attr("marker-end", function (d) {
            if (d.target === nodeRoot)
                return "url(#targeting)";
            else
                return "url(#" + d.type + ")";
        })
        .classed("targeting", function (d) {
            return d.target === nodeRoot;
        });

    texts
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + (d.y - 15) + ")";
        })
        .style("opacity", function (d) {
            if (neighboring(d, nodeRoot) || d === nodeRoot)
                return 1;
            else
                return 0.25;

        });

}

function click(d) {
    // Stop the force to control manually the actions
    force.stop();

    // Unselect & unfix the current nodeRoot
    nodeRoot.fixed = false;
    nodeRoot.selected = false;

    d.selected = true;
    d.fixed = true;

    /*
     * Moving the new nodeRoot at the center in delta times
     */
    var delta = 10;
    var deltaX = ((width / 2) - d.x) / delta;
    var deltaY = ((height / 2) - d.y) / delta;

    nodeRoot = d;

    // Reset the map Neighbor - Deepth according to the new nodeRoot
    mapNeighborDeepth = makeDeepthNeighborsMapBreadthFirst(nodeRoot);
    console.log(mapNeighborDeepth);

    // Move the nodeRoot
    // Call force.tick() manually, in a setTimeout to avoid instant move
    for (var i = 0; i < delta; i++) {
        setTimeout(function () {
            d.x += deltaX;
            d.y += deltaY;
            d.px = d.x;
            d.py = d.y;
            force.tick();
        }, 15 * i);
    }

    // The nodeRoot has been moved, we can restart the force
    force.start();

    node.classed("nodeOver", false);
    node.classed("neighborNodeOver", false);
    texts.classed("nodeOver", false);
    texts.classed("neighborNodeOver", false);
    texts.classed("nodeRoot", function (d) {
        return d === nodeRoot;
    })

}

function makeDeepthNeighborsMapBreadthFirst(nodeRoot) {

    resetCheckMark();

    /*
     * mapResult : Map which be returned. It is map of <Depth><Array of node>, which save the nodes for each depth from the nodeRoot
     * queueNode : Queue of node, use to process over all the node one time
     * depthChildrenQueue : Queue of {depth,children} which is used to know how many children have a depth.
     */
    var mapResult = [],
        queueNode = [],
        depthChildrendQueue = [];

    // depthChildren for the nodeRoot, with a 0 depth and children to 0 to force it to be delete at the fist iteration
    var firstDepthChildren = {
        "depth": 0,
        "children": 0
    };

    depthChildrendQueue.push(firstDepthChildren);
    queueNode.push(nodeRoot);
    nodeRoot.checkedNeighbor = true;

    while (queueNode.length > 0) {

        var currentNode = queueNode.shift();
        var currentDepthChild = depthChildrendQueue[0];

        // decrement the number of children with this depth, to count the current node
        currentDepthChild.children--;
        // if there is no other child for this depth, delete it from the queue
        if (currentDepthChild.children <= 0) {
            depthChildrendQueue.shift();
        }

        // Add the node to the map, create the index if no already done
        if (mapResult[currentDepthChild.depth]) {
            mapResult[currentDepthChild.depth].push(currentNode);
        } else {
            mapResult[currentDepthChild.depth] = [];
            mapResult[currentDepthChild.depth].push(currentNode);
        }

        var nbNeighbors = 0;
        // Add the children of this node, to nodes queue, and mark them
        nodesArray.forEach(function (node) {
            if (neighboring(currentNode, node) && !node.checkedNeighbor) {
                // node is a child because neighbor and not checked
                queueNode.push(node);
                node.checkedNeighbor = true;
                nbNeighbors++;
            }
        });

        // Create a depthChildren object for its children. When it is their turn to be processed, this object sould be also on the first of the queue of the depthChildrenQueue
        var newDepthChildren = {
            "depth": currentDepthChild.depth + 1,
            "children": nbNeighbors
        };
        // Test children for the leaf cases
        if (newDepthChildren.children > 0) {
            depthChildrendQueue.push(newDepthChildren);
        }
    }

    return mapResult;
}

/*
 ** Refresh the map in which we know the neighbor node : node1,node2 : 1 -> node1 and node2 neighbors
 */
function refreshNeighborMap(myLinksArray) {
    myLinksArray.forEach(function (d) {
        linkedByIndex[d.source.id + "," + d.target.id] = 1;
    });
}

function neighboring(a, b) {
    return linkedByIndex[a.id + "," + b.id] || linkedByIndex[b.id + "," + a.id];
}

/*
 * Reset the check mark for all the node array (marks used to set the deepth of the nodes)
 */
function resetCheckMark() {
    nodesArray.forEach(function (node) {
        node.checkedNeighbor = false;
    });
}

/*
 ** Return the FIRST (lowest) deepth for a node
 */
function getDeepthNeighbor(node, mapDeepNeighbor) {
    for (var i = 0; i < mapDeepNeighbor.length; i++) {
        for (var j = 0; j < mapDeepNeighbor[i].length; j++) {
            if (mapDeepNeighbor[i][j].index === node.index) {
                return i;
            }
        }
    }
    return -1;
}

/*
 ** Return the FIRST (lowest) deepth for a node
 */
function getDeepthNeighbor2(node, mapDeepNeighbor) {
    for (var i = 0; i < mapDeepNeighbor.length; i++) {
        for (var j = 0; j < mapDeepNeighbor[i].length; j++) {
            if (mapDeepNeighbor[i][j] === node) {
                return i;
            }
        }
    }
    return -1;
}

function customLinkDistanceDeepth(node, mapDeepNeighbor) {
    switch (getDeepthNeighbor(node, mapDeepNeighbor)) {
    case 0:
        return 150;
    case 1:
        return 100;
    case 2:
        return 50;
    case 3:
        return 40;
    default:
        return 20;
    }
}

function customLinkDistanceDeepth2(node, mapDeepNeighbor) {
    switch (getDeepthNeighbor2(node, mapDeepNeighbor)) {
    case 0:
        return -150;
    case 1:
        return -100;
    case 2:
        return -50;
    case 3:
        return -40;
    default:
        return -20;
    }
}


function getNeighbors(nodesArray, currentNode) {
    var neighborsArray = [];
    nodesArray.forEach(function (node) {
        if (neighboring(currentNode, node))
            neighborsArray.push(node);
    });
    return neighborsArray;
}

function getSymbolType(type) {
    var symbolType = "";
    if (type === "device") {
        symbolType = "circle";
    } else if (type === "program") {
        symbolType = symbolType = "cross";
    } else if (type === "service") {
        symbolType = symbolType = "diamond";
    } else if (type === "place") {
        symbolType = symbolType = "square";
    } else if (type === "time") {
        symbolType = symbolType = "triangle-down";
    }
    return symbolType;
}