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
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.actions();
  },

  transformText: function () {
    $("#white-eyes").click(function () {
      var txt = $("#origin").val();
      txt = txt.replace(/[aeiouáéíóú]/igm, "i");
      $("#destiny").val(txt);
    });
  },

  copy: function () {
    $("#copy").click(function () {
      $("#destiny").select();
      document.execCommand("Copy");
      navigator.notification.beep(2);
      navigator.notification.alert(
          'Has copiado el texto!',
          null,
          'Copiado',
          ['Ok']
          );
    });
  },

  actions: function () {
    $(document).ready(function () {
      this.transformText();
      this.copy();
    });
  }
};
app.initialize();

//      var json = this.getJson("https://raw.githubusercontent.com/Eduardomoberti/iparser/master/www/json/words.json");
//      if(!json) {
//        json = this.getJson("json/words.json");
//      }
//      navigator.notification.alert(
//        json,
//        null,
//        'JSON',
//        ['Ok']
//      );

//  getJson: function (file) {
//    $.getJSON(file)
//      .done(function(data) {
//        return data;
//      })
//      .fail(function() {
//        console.log( "error, file not found" );
//        return false;
//      })
//      .always(function() {
//        console.log( "complete" );
//      });
//  },