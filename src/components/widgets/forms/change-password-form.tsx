import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ChangePasswordForm() {
    return (
        <form>
            <div className="grid gap-6">
                <div className="grid gap-6">
                    <div className="">
                        <Label htmlFor="password">New Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <div className="">
                        <Label htmlFor="password">Confirm Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Reset Password
                    </Button>
                </div>
            </div>
        </form>

    )
}
