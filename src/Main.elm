module Main exposing (main)

import Browser
import Html exposing (div, h1, text)
import Html.Attributes exposing (class)


type Model
    = TemplateModel


type alias Msg =
    {}


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }


init : () -> ( Model, Cmd Msg )
init _ =
    ( TemplateModel, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update _ _ =
    ( TemplateModel, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


view : Model -> Html.Html Msg
view _ =
    div [ class "container" ] [ h1 [] [ text "Hello World!" ] ]
