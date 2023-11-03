export default function Page({ params }: { params: { user: string } }) {
  return <div>My Post: {params.slug}</div>
}