<svg fill="none" viewBox="0 0 800 400" width="800" height="400" xmlns="http://www.w3.org/2000/svg">
	<foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
                html {
                    scroll-behavior: smooth;
                }
                .list {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }
                .link {
                    color: #fff;
                    text-decoration: underline;
                    font-size: 18px;
                    transition: .3s font-size ease;
                }
                .link:hover {
                    color: #bbb;
                    font-size: 20px;
                }
                .card {
                    border-radius: 16px;
                    padding: 15px;
                    background-color: #d2d2d2;
                    display: grid;
                    grid-template-columns: 3fr 2fr;
                    gap: 10px;
                }
                .card_img {
                    grid-column: 1;
                    border-radius: 8px;
                    height: 100%;
                }
                .card_content {
                    position: relative;
                    padding: 10px;
                    border-radius: 2px 16px 16px 2px;
                    border: 2px solid #d2d2d2;
                    grid-column: 2;
                    color: #000;
                }
                .card_title {
                    margin-bottom: 15px;
                    font-size: 24px;
                }
                .card_description {
                    font-size: 18px;
                }
                h2 {
                    font-size: 28px;
                    font-weight: bold;
                    margin-bottom: 15px;
                    padding: 0;
                }
                .card_list {
                    margin-bottom: 10px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }

            </style>

            <h1>Auto-wataring app</h1>

            <div class='contents'>
                <ul class='list'>
                    <li>
                        <a href='#pages_ready' class='link'>Pages ready</a>
                    </li>
                    <li>
                        <a href='#pages_in_work' class='link'>Pages in work</a>
                    </li>
                    <li>
                        <a href='#pages_in_queue' class='link'>Pages in queue</a>
                    </li>
                </ul>
            </div>

            <hr>

            <div id='pages_ready'>
                <h2>Pages ready</h2>
                <h3>None</h3>
            </div>

            <hr>

            <div id='pages_in_work'>
                <h2>Pages in work</h2>
                <ul class='list card_list'>
                    <li class='card'>
                        <img class='card_img' src="assets/example/plants_page.jpg" alt='platns page'>
                        <div class='card_content'>
                            <h3 class='card_title'>
                                Plants page
                            </h3>
                            <div class='card_description'>
                                This page is responsible for displaying all the plants of the user and the plant database 
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <hr>

            <div id='pages_in_queue'>
                <h2>Pages in queue</h2>
                <ul class='list card_list'>
                    <li class='card'>
                        <img class='card_img' src="assets/example/connection_page.png" alt='connection page'>
                        <div class='card_content'>
                            <h3 class='card_title'>
                                Connection page
                            </h3>
                            <div class='card_description'>
                                This page is responsible for connection to device 
                            </div>
                        </div>
                    </li>
                    <li class='card'>
                        <img class='card_img' src="assets/example/plant_page.png" alt='platn page'>
                        <div class='card_content'>
                            <h3 class='card_title'>
                                Plant page
                            </h3>
                            <div class='card_description'>
                                This page is responsible for displaying one plant selected by the user
                            </div>
                        </div>
                    </li>
                    <li class='card'>
                        <img class='card_img' src="assets/example/main_page.png" alt='main page'>
                        <div class='card_content'>
                            <h3 class='card_title'>
                                Main page
                            </h3>
                            <div class='card_description'>
                                This page with basic information about the plant system 
                            </div>
                        </div>
                    </li>
                    <li class='card'>
                        <img class='card_img' src="assets/example/calendar_page.png" alt='calendar page'>
                        <div class='card_content'>
                            <h3 class='card_title'>
                                Calendar page
                            </h3>
                            <div class='card_description'>
                                This page displays when the plants will be watered, and you can also specify your watering schedule
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
	</foreignObject>
</svg>