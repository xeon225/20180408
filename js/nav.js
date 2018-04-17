
var data = {
    "navData": [
    	{
    		"title":"HOME",
    		"url":"index.html",
    		"second":[
    			{
    				"name":"ホーム",
    				"url":"index.html"
    			}
    		]
    	},
    	{
    		"title":"ABOUT",
    		"url":"about.html",
    		"second":[
    			{
    				"name":"代表挨拶",
    				"url":"about.html#about_1"
    			},
    			{
    				"name":"会社概要",
    				"url":"about.html#about_2"
    			},
    			{
    				"name":"会社理念",
    				"url":"about.html#about_3"
    			},
    			{
    				"name":"アクセス",
    				"url":"http://maps.google.co.jp/maps?f=q&source=s_q&hl=ja&geocode=&q=東京都新宿区高田馬場2-16-3柏ビル3F%0a&ie=UTF8"
    			}
    		]
    	},
    	{
    		"title":"OUR SERVICES",
    		"url":"",
    		"second":[
    			{
    				"name":"不動産事業",
    				"url":""
    			},
    			{
    				"name":"環境事業",
    				"url":""
    			},
    			{
    				"name":"福祉事業",
    				"url":""
    			},
    			{
    				"name":"OEM事業",
    				"url":""
    			},
    			{
    				"name":"M&A事業",
    				"url":""
    			},
    			{
    				"name":"移民投資事業",
    				"url":""
    			},
    			{
    				"name":"旅行事業",
    				"url":""
    			},
    			{
    				"name":"健診・治療・美容事業",
    				"url":""
    			}
    		]
    	},
    	{
    		"title":"CONTACT",
    		"url":"",
    		"second":[
    			{
    				"name":"お問い合わせ",
    				"url":""
    			}
    		]
    	},
    	{
    		"title":"JION US",
    		"url":"",
    		"second":[
    			{
    				"name":"募集情報",
    				"url":""
    			}
    		]
    	}
    ]
}

function nav(data){
	var data = data.navData,
		html = '<ul class="clearfix">',
		urlOne,
		urlTwo,
		classOne,
		classTwo,
		dataTwo;

	for(var i = 0; i < data.length; i++)
	{
		urlOne = data[i].url == '' ? '#' : data[i].url;
		classOne = data[i].url == '' && 'temp';


		html += '<li class="pos-r">';
		html += '<a href="' + urlOne + '" class="' + classOne + '">'+data[i].title+'</a>';
		html += '<div class="second">';
		dataTwo = data[i].second;
		for(var j = 0; j < data[i].second.length; j++)
		{
			urlTwo = data[i].url == '' ? '#' : data[i].url;
			classTwo = data[i].url == '' && 'temp';
			html += '<div>';
			html += '<a href="' + urlTwo + '" class="' + classTwo + '">';
			html += '<i class="icon-x_right a"></i><i class="icon-x_rightFill hover"></i>'+ dataTwo[j].name +'';
			html += '</div>';
			html += '</a>';
		}
		html += '</div>';
		html += '</li>';

	}
	html += '</ul>';
	
	$('#navList').html(html);
	$('#navListM').html(html); 
	$('#navListF').html(html); 
}