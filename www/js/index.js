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

  json: "",

  getJson: function () {

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

  onDeviceReady: function () {

    $(document).ready(function () {

      $.ajaxSetup({cache: false});

      $("#white-eyes").click(function () {

        var txt = $("#origin").val();

        var final = txt.replace(/[aeiouáéíóú]/igm, "i");

        var rewrite = false;

        var txtreplace = txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

        var txtorigin = txt.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

        $.each(app.json, function (index, value) {

          var txtcomparing = value[0].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

          if (txtorigin.includes(txtcomparing)) {

            rewrite = true;

            txtreplace = txtreplace.replace(txtcomparing, value[1]);

          }

        });

        if (rewrite) {
          final = txtreplace;
        }

        $("#destiny").val(final);

      });

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
  }
};
app.initialize();
