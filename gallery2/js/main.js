<script type="text/javascript"> $(document).ready(function () { $('#divId img').on({ mouseover: function () { $(this).css({ 'cursor': 'hand', 'border-Color': 'red' }); }, mouseout: function () { $(this).css({ 'cursor': 'default', 'border-Color': 'grey' }); }, click: function () { var imageURL = $(this).attr('src'); $('#mainImage').fadeOut(500, function () { $(this).attr('src', imageURL); }).fadeIn(500); } }); }); </script>