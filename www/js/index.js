/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    //this.onDeviceReady();
  },

  // Json property.
  json: "",

  // Function to get json form server or local.
  getJson: function () {

    // Get json from git repository, if it fails, it gets json from local.
    $.getJSON("https://raw.githubusercontent.com/Eduardomoberti/iparser/master/www/json/words.json", function (data) {

      app.json = data;

    }).fail(function () {

      $.getJSON("json/words.json", function (data) {

        app.json = data;

        console.log("local");

      });
    }).always(function () {

      console.log(JSON.stringify(app.json));

    });
  },

  // This function is excuted when device is ready.
  onDeviceReady: function () {

    $(document).ready(function () {

      // Disabled cache to void an updated json file.
      $.ajaxSetup({cache: false});

      // On click white eyes button its gets the text from origin textarea.
      $("#white-eyes").click(function () {

        var txt = app.removeAccents($("#origin").val());

        // The text vocals are replaced by i vocals.
        var final = txt.replace(/[aeiou]/igm, "i");

        var rewrite = false;

        // Its remove the specials characters and transform the text to
        // lowercase.
        var txtreplace = txt;

        var txtorigin = txt;

        // Foreach the json and compared the values with the text.
        $.each(app.json, function (index, value) {

          var wordc = app.removeAccents(value[0]);

          // If the text origin includes the value of the json file then replace
          // the origin with the value.
          var regexp = new RegExp(wordc, "ig");
          if (txtorigin.match(regexp)) {

            rewrite = true;
            var txtsust = app.removeAccents(value[1]);
            // Replace word if false or not exists value in that index.
            if(!value[2]) {

              var reg = new RegExp(wordc, "ig");
              txtreplace = txtreplace.replace(reg, txtsust);

            } else {
              // Replace all text if index 2 in json is true.
              txtreplace = txtsust;
              return;
            }

          }

        });

        // If the text was replaced then the final var
        // will be the text replaced.
        if (rewrite) {
          final = txtreplace.replace(/[aeiou]/igm, "i");
        }

        // Shows the text in the destiny textarea.
        $("#destiny").val(final);

      });

      // On click button its select the destiny textarea and copy the text
      // on it and its shows a notification alert.
      $("#copy").click(function () {

        $("#destiny").select();

        document.execCommand("Copy");

        navigator.notification.alert(
            'Has copiado el texto!',
            null,
            'Copiado',
            ['Ok']
            );

      });

      app.getJson("json/words.json");

    });
  },

  removeAccents: function(str) {
    var accents    = 'ÁáÉéÍíÓóÚú';
    var accentsOut = "AaEeIiOoUu";
    str = str.split('');
    var strLen = str.length;
    var i, x;
    for (i = 0; i < strLen; i++) {
     if ((x = accents.indexOf(str[i])) != -1) {
       str[i] = accentsOut[x];
     }
    }
    return str.join('');
  }
};

app.initialize();
