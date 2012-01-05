#include <QtGui/QApplication>
#include "qmlapplicationviewer.h"
#include <QPixmap>
#include <QRect>
#include <QPainter>
#include <QDesktopWidget>
#include <QColor>
#include <QSplashScreen>

Q_DECL_EXPORT int main(int argc, char *argv[])
{
    QScopedPointer<QApplication> app(createApplication(argc, argv));
    QmlApplicationViewer viewer;
    viewer.setMainQmlFile(QLatin1String("qml/Symato/Splash.qml"));
    viewer.showExpanded();
    return app->exec();
}
