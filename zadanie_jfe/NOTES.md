1. Strona została przetestowana na Mozlli oraz Chromie, oprócz jednego, nie zauważyłem żadnych problemów.
2. Pojawił sie problem z responsywnością przy małych rozmiarach okna w Chrome. W Mozilli strona wyświetla się zgodnie z szablonem, w Chrome, pomimo wielu prób i zmian, pozostał wygląd "średni".
3. W pliku json zauważyłem, że dane były zapisane w różny sposób, dlatego trzeba było znormalizować wartości za pomocą regexa aby móc je ze sobą porównywać.
4. Aby móc dostosowywać rozmiar obrazka do wielkości okna korzystałem z srcset.
5. Postępując z zadaniami nauczyłem się korzystać z utm'ów, gdyż wcześniej faktycznie nie miałem z nimi styczności.
6. Poprzez zadanie zmieniające kotrast zrozumialem, że chodzi o tryb nocny, mam nadzieję, że się nie mylę :)
7. Funkcje związane z local storage itp. zostały umieszczone w osobnym pliku utils.js
8. Do autocomplete wykorzystałem bibliotekę "autocompleter"
9. Gdy nie można załadować danych, pojawia się alert ze stosowną informacją. 