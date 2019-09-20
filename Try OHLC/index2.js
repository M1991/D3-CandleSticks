var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

    var svgWidth = 800, svgHeight = 300;

    var svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);
    
    var xScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, svgWidth]);
             
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([svgHeight, 0]);
             

svg.append('text')
        .attr("class", "value-section")
        .attr("x", 20)
        .attr("y", 20)
        .text("Open");
const open_text = svg.append('text')
        .attr("class", "value open")
        .attr("x", 60)
        .attr("y", 20)
        .text("33.20");

// High
svg.append('text')
        .attr("class", "value-section")
        .attr("x", 20)
        .attr("y", 35)
        .text("High");
const high_text = svg.append('text')
        .attr("class", "value high")
        .attr("x", 60)
        .attr("y", 35)
        .text("33.20");

// Close
svg.append('text')
        .attr("class", "value-section")
        .attr("x", 20)
        .attr("y", 50)
        .text("Low");
const low_text = svg.append('text')
        .attr("class", "value low")
        .attr("x", 60)
        .attr("y", 50)
        .text("33.20");

// Close
svg.append('text')
        .attr("class", "value-section")
        .attr("x", 20)
        .attr("y", 65)
        .text("Close");
const close_text = svg.append('text')
        .attr("class", "value close")
        .attr("x", 60)
        .attr("y", 65)
        .text("33.20");

// Volume
svg.append('text')
        .attr("class", "value-section")
        .attr("x", 120)
        .text("Volume");
const volume_text = svg.append('text')
        .attr("class", "value")
        .attr("x", 160)
        .text("33.20");

// RSI
svg.append('text')
        .attr("class", "value-section")
        .attr("x", 210)
        .text("RSI");
const rsi_text = svg.append('text')
        .attr("class", "value")
        .attr("x", 235)
        .text("...");

// MACD
svg.append('text')
        .attr("class", "value-section")
        .attr("x", 300)
        .text("MACD");
const macd_text = svg.append('text')
        .attr("class", "value")
        .attr("x", 340)
        .text("...");
        



const bisectDate = d3.bisector(function(d) { return d.date; }).left;



function mousemove() {
    let mouseX    = x.invert(d3.mouse(this)[0]);
    let index     = bisectDate(data, mouseX, 1);
    let macdIndex = bisectDate(macdData, mouseX, 1);
    let rsiIndex  = bisectDate(rsiData, mouseX, 1);
    let entry     = data[index];
    let open      = entry.open;
    let high      = entry.high;
    let low       = entry.low;
    let close     = entry.close;
    let volume    = entry.volume;
    let macd      = macdData[macdIndex];
    let rsi       = rsiData[rsiIndex];
    open_text.text( open );
    high_text.text( high );
    low_text.text( low );
    close_text.text( close );
    volume_text.text( volume );
    rsi_text.text( rsi.rsi >= rsi.overbought ? "Overbought" : rsi.rsi <= rsi.oversold ? "Oversold" : "..." );
}

svg.on("mousemove", mousemove);