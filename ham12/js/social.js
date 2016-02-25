<script>
    $(document).ready(function(){
        $('.social-feed-container').socialfeed({
            // INSTAGRAM
            instagram:{
                accounts: ['@teslamotors','#teslamotors'],  //Array: Specify a list of accounts from which to pull posts
                limit: 2,                                    //Integer: max number of posts to load
                client_id: 'YOUR_INSTAGRAM_CLIENT_ID'       //String: Instagram client id (optional if using access token)
                access_token: 'YOUR_INSTAGRAM_ACCESS_TOKEN' //String: Instagram access token
            },

            // GENERAL SETTINGS
            length:400                                      //Integer: For posts with text longer than this length, show an ellipsis.
        });
    });
</script>