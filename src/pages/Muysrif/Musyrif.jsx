import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import DashboardMusyrif from "@/components/views/Musyrif/DashboardMusyrif";

const MusyrifPage = () => {
  return (
    <DashboardLayout type="musyrif">
      <DashboardMusyrif />
    </DashboardLayout>
  );
};

export default MusyrifPage;
