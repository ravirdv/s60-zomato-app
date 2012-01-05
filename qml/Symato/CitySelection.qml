// import QtQuick 1.0 // to target S60 5th Edition or Maemo 5
import QtQuick 1.1
import com.nokia.symbian 1.1

Page {
    id:citySelection
    tools:ToolBarLayout {
        id: toolBarLayout
        ToolButton {
            flat: true
            iconSource: "toolbar-back"
            onClicked:  window.pageStack.depth <= 1 ? Qt.quit() : window.pageStack.pop()
        }
        ToolButton {
            flat: true
            iconSource: "qrc:/icons/ok.svg"
            onClicked: {
            }
        }
        ToolButton {
            flat: true
            iconSource: "toolbar-menu"
            onClicked: globalMenu.open()
        }
    }
    Column{
        spacing: 20
        anchors.centerIn: parent
        Image{
            anchors.horizontalCenter: parent.horizontalCenter
            source: "qrc:/icons/appIcon.png"
        }
        SelectionListItem {
                id: item
                title: "City"

                subTitle: selectionDialog.selectedIndex >= 0
                          ? selectionDialog.model.get(selectionDialog.selectedIndex).name
                          : "Please select"

                onClicked: selectionDialog.open()

                SelectionDialog {
                    id: selectionDialog
                    titleText: "Select your city"
                    selectedIndex: -1
                    model: ListModel {
                        ListElement { name: "Helsinki" }
                        ListElement { name: "Oulu" }
                        ListElement { name: "Rovaniemi" }
                        ListElement { name: "Tampere" }
                        ListElement { name: "Vaasa" }
                    }
                }
            }
        CheckBox{
            anchors.horizontalCenter: parent.horizontalCenter
            platformInverted: true
            text: "Set as default city"
        }
    }
}
