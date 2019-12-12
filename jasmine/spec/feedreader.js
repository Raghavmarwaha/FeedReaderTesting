/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test ensures that loops through each feed
         * in the allFeeds object with URL defined
         * and that the URL is not empty.
         */

          it('URL is defined', function() {
            allFeeds.forEach(function(eachFeed) {
                expect(eachFeed.url).toBeDefined();
                expect(eachFeed.url.length).not.toBe(0);
            });
        });

        /* This test ensures that loops through each feed
         * in the allFeeds object awith name defined
         * and that the name is not empty.
         */

          it('name is defined',function(){
              allFeeds.forEach(function(eachFeed){
                expect(eachFeed.name).toBeDefined();
                expect(eachFeed.name.length).not.toBe(0);
            });
        });
      });


    /* This is our second  test suite named "The menu" */
     describe('The menu',function(){

        /* This test  ensures that  the menu element is
         * hidden by default.
         */

         it('menu element is hidden by default',function(){
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });

         /* This test ensures that menu changes
          * visibility when the menu icon is clicked.
          */

            //menu displays whwn clicked
            it('menu visibility is changed when it is clicked',function(){
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);

                //menu will hide when clicked again
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
        });

             /* This is our third test suite named "Initial Entries" */
             describe('Initial Entries',function(){
              beforeEach(function(done) {
               loadFeed(0, function() {
                done();
              });
            });

        /* This test ensures test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        it('there is atleast single element within .feed container',function(){
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });

           // This is our fourth test suite named "New Feed Selection"
             describe('New Feed Selection',function(){
              var feed;
              var feedNew;
              beforeEach(function(done) {
                loadFeed(0, function() {
                 feed = $('.feed').html();
                  loadFeed(1, function() {
                    feedNew = $('.feed').html();
                     done();
            });
        });
        });

        /*This test  ensures when a feedNew is loaded it is not equal to our feed variable.*/
        it('content actually changes when new feed is loaded',function(){
            expect(feed).not.toEqual(feedNew);
        });
    });

}());
