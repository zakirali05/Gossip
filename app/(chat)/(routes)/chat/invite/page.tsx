import InviteForm from "@/components/invite-form"

const InvitePage = () => {
  return (
    <main className="w-full h-ful px-4 py-6 space-y-5">
      <h2 className="text-2xl font-medium text-primary">Invite your friends</h2>
      <div>
        <InviteForm/>
      </div>
    </main>
  )
}

export default InvitePage