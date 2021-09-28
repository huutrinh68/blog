import os
import numpy as np
import argparse
import cv2

parser = argparse.ArgumentParser(description='Mention')
parser.add_argument('--indir', help='video path', required=True)
parser.add_argument('--outdir', default='./output', required=False)
args = parser.parse_args()


def click_event(event, x, y, flags, params):
    if event == cv2.EVENT_LBUTTONDOWN:
        # on the image window
        font = cv2.FONT_HERSHEY_SIMPLEX
        # cv2.putText(frame, str(x) + ',' +
        #             str(y), (x,y), font,
        #             1, (255, 0, 0), 2)
        vertices = np.array([[x, y], [x-10, y-20], [x-5, y-20], [x-5, y-50], [x+5, y-50], [x+5, y-20], [x+10, y-20]])
        color = (0, 255, 0)
        thickness = 1
        pts = vertices.reshape((-1, 1, 2))
        cv2.polylines(frame, [pts], isClosed=True, color=color, thickness=thickness)
        cv2.fillPoly(frame, [pts], color=color)
    cv2.imshow('Frame', frame)


if __name__ == '__main__':
    video_path = args.indir
    save_path = args.outdir
    os.makedirs(save_path, exist_ok=True)
    cap = cv2.VideoCapture(video_path)
    fmt = cv2.VideoWriter_fourcc('m', 'p', '4', 'v')
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    frame_rate = round(cap.get(cv2.CAP_PROP_FPS))
    size = (width, height)
    video_save_path = os.path.join(save_path, os.path.basename(video_path))
    writer = cv2.VideoWriter(video_save_path, fmt, frame_rate, size)

    while(cap.isOpened()):
        ret, frame = cap.read()
        if ret:
            cv2.imshow('Frame', frame)
            # setting mouse hadler for the image
            # and calling the click_event() function
            cv2.setMouseCallback('Frame', click_event)
            key = cv2.waitKey(0) & 0xFF
            # if n or q was not pressed, nothing change, always waiting n or q
            while key not in [ord('q'), ord('n')]:
                key = cv2.waitKey(0)
            # Quit when 'q' is pressed
            if key == ord('q'):
                break
            writer.write(frame)
        else:
            break

    writer.release()
    cap.release()
    cv2.destroyAllWindows()
