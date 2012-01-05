import QtQuick 1.1
import com.nokia.symbian 1.1
Rectangle {
    anchors.fill: parent
    color: "black"
    Column{
        anchors.centerIn: parent
        spacing: 5
        Image{
            fillMode: Image.PreserveAspectFit
            height: 200
            width:200
            source: "qrc:/icons/appIcon.png"
        }
        Label{
            anchors.horizontalCenter: parent.horizontalCenter
            font.pixelSize: 40
            text: "Symato"
        }
    }
    Loader{
        id:loader
    }

    Timer{
        interval: 500
        running: true
        onTriggered:{
            loader.source = "main.qml"
        }

    }
}
