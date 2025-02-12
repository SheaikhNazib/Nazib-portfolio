import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { MessageCircle, UserCircle2, Loader2, AlertCircle, Send, ImagePlus, X } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";


const Comment = memo(({ comment, formatDate }) => (
    <div className="px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5">
        <div className="flex items-start gap-3">
            {comment.profileImage ? (
                <img
                    src={comment.profileImage}
                    alt={`${comment.userName}'s profile`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30"
                    loading="lazy"
                />
            ) : (
                <div className="p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                    <UserCircle2 className="w-5 h-5" />
                </div>
            )}
            <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="font-medium text-white truncate">{comment.userName}</h4>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{formatDate(new Date())}</span>
                </div>
                <p className="text-gray-300 text-sm break-words leading-relaxed relative bottom-2">{comment.content}</p>
            </div>
        </div>
    </div>
));

const CommentForm = memo(({ onSubmit, isSubmitting }) => {
    const [newComment, setNewComment] = useState('');
    const [userName, setUserName] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) return;
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleTextareaChange = (e) => {
        setNewComment(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim() || !userName.trim()) return;

        onSubmit({ newComment, userName, imagePreview });
        setNewComment('');
        setUserName('');
        setImagePreview(null);
        setImageFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        if (textareaRef.current) textareaRef.current.style.height = 'auto';
    };

    useEffect(() => {
        AOS.init({
            once: false, // Animation runs every time the element enters the viewport
            duration: 2000,
        });
        AOS.refresh(); // Ensures it refreshes all AOS elements
    }, []);

    return (
        <form onSubmit={handleSubmit} data-aos="fade-left" data-aos-duration="2000" className="space-y-6">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-white">Name <span className="text-red-400">*</span></label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium text-white">Message <span className="text-red-400">*</span></label>
                <textarea
                    ref={textareaRef}
                    value={newComment}
                    onChange={handleTextareaChange}
                    placeholder="Write your message here..."
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none min-h-[120px]"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium text-white">Profile Photo <span className="text-gray-400">(optional)</span></label>
                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    {imagePreview ? (
                        <div className="flex items-center gap-4">
                            <img src={imagePreview} alt="Profile preview" className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/50" />
                            <button type="button" onClick={() => setImagePreview(null)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all">
                                <X className="w-4 h-4" />
                                <span>Remove Photo</span>
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 transition-all border border-dashed border-indigo-500/50 hover:border-indigo-500"
                        >
                            <ImagePlus className="w-5 h-5" />
                            <span>Choose Profile Photo</span>
                        </button>
                    )}
                    <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                </div>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-medium transition-all hover:shadow-lg active:scale-95 disabled:opacity-50"
            >
                {isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
        </form>
    );
});

const Komentar = () => {
    const [comments, setComments] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);

    const handleCommentSubmit = ({ newComment, userName, imagePreview }) => {
        setIsSubmitting(true);
        setTimeout(() => {
            setComments((prev) => [
                ...prev,
                { id: Date.now(), content: newComment, userName, profileImage: imagePreview }
            ]);
            setIsSubmitting(false);
        }, 1000);
    };

    const formatDate = () => {
        return new Date().toLocaleString();
    };

    return (
        <div className="w-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl">
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/20">
                        <MessageCircle className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Comments ({comments.length})</h3>
                </div>
            </div>
            <div className="p-6 space-y-6">
                <CommentForm onSubmit={handleCommentSubmit} isSubmitting={isSubmitting} />
                <div className="space-y-4 h-[300px] overflow-y-auto custom-scrollbar">
                    {comments.length === 0 ? (
                        <div className="text-center py-8">
                            <UserCircle2 className="w-12 h-12 text-indigo-400 mx-auto mb-3 opacity-50" />
                            <p className="text-gray-400">No comments yet. Start the conversation!</p>
                        </div>
                    ) : (
                        comments.map((comment) => (
                            <Comment key={comment.id} comment={comment} formatDate={formatDate} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Komentar;
