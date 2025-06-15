// document.getElementById("download").addEventListener("click", function () {
//   const { jsPDF } = window.jspdf;

//   html2canvas(document.querySelector("#cv"), {
//     scale: window.devicePixelRatio, // เพิ่ม scale ให้ตรงกับความละเอียดของหน้าจอ
//     useCORS: true, // ช่วยในการจัดการกับรูปภาพที่มาจากแหล่งภายนอก
//   }).then((canvas) => {
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF({
//       orientation: "portrait",
//       unit: "px",
//       format: [canvas.width, canvas.height],
//     });
//     pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
//     pdf.save("cv.pdf");
//   });
// });

document.getElementById("download").addEventListener("click", function () {
  window.print();
});
