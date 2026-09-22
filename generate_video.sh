#!/bin/bash
set -e

mkdir -p /tmp/isml_video

echo "Generating clip 0 (Main Gate)..."
ffmpeg -y -loop 1 -t 4.5 -i public/assets/isml/main_gate.jpg \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,zoompan=z='min(zoom+0.0012,1.15)':d=115:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=25" \
  -c:v libx264 -pix_fmt yuv420p -t 4.5 /tmp/isml_video/clip0.mp4

echo "Generating clip 1 (Green Campus)..."
ffmpeg -y -loop 1 -t 4.5 -i public/assets/isml/green_campus.jpg \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,zoompan=z='min(zoom+0.0010,1.12)':d=115:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=25" \
  -c:v libx264 -pix_fmt yuv420p -t 4.5 /tmp/isml_video/clip1.mp4

echo "Generating clip 2 (Senior Wing)..."
ffmpeg -y -loop 1 -t 4.5 -i public/assets/isml/senior_wing.jpg \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,zoompan=z='min(zoom+0.0012,1.15)':d=115:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=25" \
  -c:v libx264 -pix_fmt yuv420p -t 4.5 /tmp/isml_video/clip2.mp4

echo "Generating clip 3 (Auditorium & Events)..."
ffmpeg -y -loop 1 -t 4.5 -i public/assets/isml/auditorium_events.jpg \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,zoompan=z='min(zoom+0.0012,1.15)':d=115:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=25" \
  -c:v libx264 -pix_fmt yuv420p -t 4.5 /tmp/isml_video/clip3.mp4

echo "Generating clip 4 (KG Park & Activities)..."
ffmpeg -y -loop 1 -t 4.5 -i public/assets/isml/kg_park.jpg \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,zoompan=z='min(zoom+0.0010,1.12)':d=115:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=25" \
  -c:v libx264 -pix_fmt yuv420p -t 4.5 /tmp/isml_video/clip4.mp4

echo "Merging with xfade transitions..."
ffmpeg -y \
  -i /tmp/isml_video/clip0.mp4 \
  -i /tmp/isml_video/clip1.mp4 \
  -i /tmp/isml_video/clip2.mp4 \
  -i /tmp/isml_video/clip3.mp4 \
  -i /tmp/isml_video/clip4.mp4 \
  -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.8:offset=3.7[v01];[v01][2:v]xfade=transition=fade:duration=0.8:offset=7.4[v02];[v02][3:v]xfade=transition=fade:duration=0.8:offset=11.1[v03];[v03][4:v]xfade=transition=fade:duration=0.8:offset=14.8[vfin]" \
  -map "[vfin]" \
  -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p -movflags +faststart \
  public/assets/isml/campus_tour_bg.mp4

ls -lh public/assets/isml/campus_tour_bg.mp4
echo "Video created successfully!"
